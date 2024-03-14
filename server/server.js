const express = require('express')
const app = express()

// routes
const issue = require('./routes/issueRoutes')

// parse json
app.use(express.json())

app.use('/api/issue', issue)

app.listen(5000, () => {
    console.log("Server is listening on port 5000...")
})