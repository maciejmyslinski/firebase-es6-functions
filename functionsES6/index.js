import { https } from 'firebase-functions'
import bodyParser from 'body-parser'
import express from 'express'
import { suggestSpringToSpring, suggestSpringToDoor } from './utils/utils'

export const helloWorld = https.onRequest((request, response) => {
  response.send('Hello from Firebase!')
})

const app = express()
app.use(bodyParser.json())

app.post('/suggest-spring-to-spring', (request, response) => {
  const modelSpringData = request.body
  response.send(suggestSpringToSpring(modelSpringData))
})

app.post('/suggest-spring-to-door', (request, response) => {
  const doorData = request.body
  response.send(suggestSpringToDoor(doorData))
})

export const api = https.onRequest(app)
