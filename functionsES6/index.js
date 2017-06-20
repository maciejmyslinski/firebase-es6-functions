import { https } from 'firebase-functions'
import bodyParser from 'body-parser'
import express from 'express'

const app = express()
app.use(bodyParser.json())

app.get('/hello-world', (request, response) => {
  response.send('Hello from firebase ES6 function')
})

export const api = https.onRequest(app)
