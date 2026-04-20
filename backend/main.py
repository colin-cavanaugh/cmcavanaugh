import os
from typing import Any, Dict, Optional
from decimal import Decimal

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from dotenv import load_dotenv

import boto3
from botocore.config import Config as BotoConfig
from boto3.dynamodb.conditions import Key

load_dotenv()

TABLE_NAME = os.getenv("MASTER_TABLE", "MASTER")
AWS_REGION = os.getenv("AWS_REGION", "us-east-1")

boto_cfg = BotoConfig(retries={"max_attempts": 10, "mode": "adaptive"})
dynamo = boto3.resource("dynamodb", region_name=AWS_REGION, config=boto_cfg)
table = dynamo.Table(TABLE_NAME)

app = FastAPI(title=f"{TABLE_NAME} API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten for prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- Pydantic models ----------
class Item(BaseModel):
    PK: str = Field(..., description="Partition key")
    SK: str = Field(..., description="Sort key")
    class Config:
        extra = "allow"  # accept arbitrary additional attributes

# ---------- Decimal helpers ----------
def to_decimals(value: Any) -> Any:
    if isinstance(value, float):
        return Decimal(str(value))
    if isinstance(value, dict):
        return {k: to_decimals(v) for k, v in value.items()}
    if isinstance(value, list):
        return [to_decimals(v) for v in value]
    return value

def from_decimals(value: Any) -> Any:
    if isinstance(value, Decimal):
        return int(value) if value % 1 == 0 else float(value)
    if isinstance(value, dict):
        return {k: from_decimals(v) for k, v in value.items()}
    if isinstance(value, list):
        return [from_decimals(v) for v in value]
    return value

# ---------- Routes ----------
@app.get("/")
def root():
    return {"message": f"Hello from FastAPI for {TABLE_NAME} 🚀"}

@app.get("/api/item/{PK}/{SK}")
def get_item(PK: str, SK: str):
    try:
        resp = table.get_item(Key={"PK": PK, "SK": SK})
        item = resp.get("Item")
        if not item:
            raise HTTPException(status_code=404, detail="Item not found")
        return from_decimals(item)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"DynamoDB error: {e}")

@app.put("/api/item")
def put_item(payload: Item, overwrite: bool = True):
    """
    Upsert item. If overwrite=False, only succeeds when the item doesn't exist.
    """
    try:
        item: Dict[str, Any] = to_decimals(payload.dict())

        kwargs: Dict[str, Any] = {"Item": item}
        if not overwrite:
            kwargs["ConditionExpression"] = (
                "attribute_not_exists(PK) AND attribute_not_exists(SK)"
            )

        table.put_item(**kwargs)
        return {"success": True}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Put error: {e}")

@app.delete("/api/item/{PK}/{SK}")
def delete_item(PK: str, SK: str):
    try:
        table.delete_item(Key={"PK": PK, "SK": SK})
        return {"success": True}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Delete error: {e}")

@app.get("/api/items/{PK}")
def query_items(
    PK: str,
    begins_with: Optional[str] = Query(None, description="Prefix match on SK"),
    between: Optional[str] = Query(None, description="Range on SK: 'from,to'"),
    limit: int = Query(100, ge=1, le=1000),
    next_token: Optional[str] = Query(None, description="Pass LastEvaluatedKey['SK'] to continue"),
):
    """
    Query by PK with optional SK filters.
    - begins_with: e.g., 'ORG#', 'PRODUCT#'
    - between: 'TS#2025-01-01,TS#2025-12-31' (lexical SK range)
    """
    try:
        key_cond = Key("PK").eq(PK)

        if begins_with and between:
            raise HTTPException(status_code=400, detail="Use either begins_with or between, not both.")

        if begins_with:
            key_cond &= Key("SK").begins_with(begins_with)

        if between:
            try:
                sk_from, sk_to = [s.strip() for s in between.split(",", 1)]
            except ValueError:
                raise HTTPException(status_code=400, detail="between must be 'from,to'")
            key_cond &= Key("SK").between(sk_from, sk_to)

        kwargs: Dict[str, Any] = {
            "KeyConditionExpression": key_cond,
            "Limit": limit,
        }

        # Simple pagination using the last seen SK
        if next_token:
            kwargs["ExclusiveStartKey"] = {"PK": PK, "SK": next_token}

        resp = table.query(**kwargs)
        items = [from_decimals(i) for i in resp.get("Items", [])]
        lek = resp.get("LastEvaluatedKey")
        return {
            "items": items,
            "next_token": lek["SK"] if lek else None,
            "count": resp.get("Count", 0),
            "scanned_count": resp.get("ScannedCount", 0),
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Query error: {e}")
