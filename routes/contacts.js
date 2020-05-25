const express = require("express");

const router = express.Router();

//@route get api/contacts
//@desc get all contacts
//@access private

router.get("/", (req, res) => {
    res.send("get all the contact")
})

//@route post api/contacts
//@desc add a new contac
//@access private

router.post("/", (req, res) => {
    res.send("add a new contact");
})


//@route put api/contacts/:id
//@desc edit the existing contact
//@access private

router.put("/:id", (req, res) => {
    res.send("contact has been updated")
})

//@route delete api/contacts/:id
//@desc delete an existing contact
//@access private

router.delete("/:id", (req, res) => {
    res.send("contact has been deleted")
})


module.exports = router;