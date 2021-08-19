const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "views")))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    console.log("Connection to database Successful")
})

app.get("/", (req, res) => {
    res.render("")
})

app.use("/reply", require("./route"))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server Started on port: ${PORT}`)
})