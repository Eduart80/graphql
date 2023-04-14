const mongoose = require('mongoose')

const ProjectSchema = mongoose.Schema({
    name: { type: String },
    description: { type: String },
    status: { 
        type: String,
        enum:['NOT_STARTED','IN_PROGRESS','COMPLETED']
    },
    clientId:{type:mongoose.Schema.Types.ObjectId}
})
module.exports = mongoose.model('Project', ProjectSchema)