const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv').config()

const path = require("path")
const url = require("url")
// import { dirname } from "path";
//import { fileURLToPath } from 'url';

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);
const _dirname = path.dirname("")
const buildPath = path.join(_dirname, "../frontend/build")
app.use(express.static(buildPath))

// environment variables
const DB_URL = process.env.DB_URL;

// parse json
app.use(express.json())

// routes
const issue = require('./routes/issueRoutes')
app.use('/api/issue', issue)

app.get("*", function(req,res) {
    res.sendFile(
        path.join(__dirname, "../frontend/build/index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }
        }
    )
})

app.listen(5000, () => {
    mongoose.connect(DB_URL)
    .then(() => {
        console.log('connected to mongodb');
    }).catch((error) => {
        console.log(error);
    })
    
    console.log("Server is listening on port 5000...")
})