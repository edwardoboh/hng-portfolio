const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    email: String,
    message: String
})

module.exports = mongoose.model("users", UserSchema)