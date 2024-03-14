const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv').config()

// environment variables
const DB_URL = process.env.DB_URL;

// routes
const issue = require('./routes/issueRoutes')
app.use('/api/issue', issue)

// parse json
app.use(express.json())



app.listen(5000, () => {
    mongoose.connect(DB_URL)
    .then(() => {
        console.log('connected to mongodb');
    }).catch((error) => {
        console.log(error);
    })
    
    console.log("Server is listening on port 5000...")
})