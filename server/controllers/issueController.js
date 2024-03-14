const issues = [
    {
        id: 1,
        title: "Laptop broken",
        description: "My laptop broke recently"

    }
]

const getIssue = (req,res) => {
    res.status(200).json("getting issue")
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