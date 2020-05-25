const express = require("express");

const router = express.Router();

//@route Get API/AUTH
//@desc Get logged in user
//@access Private

router.get("/", (req, res) => {
    res.send("Get logged in user")
})

//@route POST api/auth
//@desc auth user & get token
//@access private

router.post("/", (req, res) => {
    res.send("login user")
})

module.exports = router;