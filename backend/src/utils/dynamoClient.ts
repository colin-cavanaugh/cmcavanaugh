// src/utils/dynamoClient.ts
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'

const client = new DynamoDBClient({ region: 'us-east-1' }) // or whatever region you're using

const ddbDocClient = DynamoDBDocumentClient.from(client)

export { ddbDocClient }
