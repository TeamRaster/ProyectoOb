'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FilesSchema = new Schema({
    extension     : String,
    nombre        : String,
    creacionFile  : {
        type      : Date,
        require   : Date.now
    },
    creator: {
        type      : Schema.Types.ObjectId,
        ref       : "User"
    },
    folder: {
        type      : Schema.Types.ObjectId,
        ref       : "Folder"
    },

})

module.exports = mongoose.model('File', FilesSchema)
