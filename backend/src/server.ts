import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello from TypeScript server 🚀')
})

import { GetCommand } from '@aws-sdk/lib-dynamodb'
import { ddbDocClient } from './utils/dynamoClient'

app.get('/api/item/:id', async (req, res) => {
  try {
    const data = await ddbDocClient.send(
      new GetCommand({
        TableName: 'MASTER',
        Key: { id: req.params.id }, // adjust based on your PK
      })
    )
    res.json(data.Item)
  } catch (err) {
    console.error('DynamoDB error:', err)
    res.status(500).json({ error: 'Failed to get item' })
  }
})

import { PutCommand } from '@aws-sdk/lib-dynamodb'

app.post('/api/item', async (req, res) => {
  try {
    const result = await ddbDocClient.send(
      new PutCommand({
        TableName: 'MASTER',
        Item: req.body,
      })
    )
    res.json({ success: true, result })
  } catch (err) {
    console.error('Put error:', err)
    res.status(500).json({ error: 'Failed to write item' })
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
