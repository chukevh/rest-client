const Issue = require("../models/issue")

const getIssue = async (req,res) => {
    try {
        const issues = await Issue.find({})
        res.status(200).json(issues)
        console.log("Issue data fetched")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createIssue = (req,res) => {
    res.status(200).json("creating issue")
}

const updateIssue = (req,res) => {
    res.status(200).json("updating issue")
}

const deleteIssue = (req,res) => {
    res.status(200).json("deleting issue")
}

module.exports = {
    getIssue,
    createIssue,
    updateIssue,
    deleteIssue
}