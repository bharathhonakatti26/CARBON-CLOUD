const express = require('express');
const cors = require('cors');
const collection = require('./index')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.post("/",async (req , res)=>{
    const { username, email, password } = req.body;

    const newUser = {
        username,
        email,
        password,
    };

    await collection.insertMany([newUser]);
})

app.listen(5173 , ()=>{
    console.log('port connected')
})