// server.js

const express = require('express')
const app = express()

const PORT = 4444

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}\n`)
})

app.get('/test', (req, res) => {
  console.log('\n---------HTTP GET REQUEST DATA-------------')
  console.log('\nHeaders - ', req.headers)
  console.log('\nMethod - ', req.method)
  res.send('Success: GET Request Received!\n\n')
})

app.post('/test', (req, res) => {
  console.log('\n\n---------HTTP POST REQUEST DATA-------------')
  console.log('\nHeaders - ', req.headers)
  console.log('\nMethod - ', req.method)
  console.log('\nBody - ', req.body)
  res.send('Success: POST Request Received!\n\n')
})