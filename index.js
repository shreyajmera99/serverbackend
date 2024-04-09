require('dotenv').config()
const express = require('express')
//import express from express: Line 3 and 4 are same but different way to import express    
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Twitter Page')
})

app.get('/login', (req,res) => {
    res.send('login page')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})