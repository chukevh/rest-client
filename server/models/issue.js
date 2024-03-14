const mongoose = require("mongoose") 

const issueSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        }
    },
    { timestamps: true }
)

const Issue = mongoose.model('Issue', issueSchema)
module.exports = Issue