const express = require('express')
const app = express()

app.use(express.json())

app.get("/", (req,res) => {
    res.status(200).json("server is running")
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000...")
})