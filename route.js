const express = require('express')
const router = express.Router()
const Users = require('./model/Users')

router.post("/", (req, res) => {
    let name = req.body.name
    let _replyto = req.body._replyto
    let message = req.body.message

    const newUser = new Users({
        name,
        email: _replyto,
        message
    })
    newUser.save().then((resp) => {
        // console.log(resp)
    }).catch(e => console.log(e))
    res.render("success")
})

router.get("/", (req, res) => {
    Users.find().then(resp => {
        // res.json(resp)
        res.render("submissions", {users: resp})
    }).catch(e => {
        res.send("Error Getting all Submissions")
    })
})

module.exports = router