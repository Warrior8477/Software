require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/callMe', (req, res) => {
    res.send('I will call you')

})

app.get('/sendMe', (req, res) => {
    res.send('I will call you')

})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})