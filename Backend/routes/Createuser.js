const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const { body, validationResult } = require('express-validator');

const jwt = require("jsonwebtoken"); //npm i jsonwebtoken
const bcrypt = require("bcryptjs"); //npm i bcryptjs //security inhance
const jwtSecret = "dsjflkjfdslkasl;fkl;sdkfl;sdkf;lsdl;fsl;fdf,lvc,cxlv;xclv";

router.post("/createuser", [
    body('Name').isLength({ min: 5 }),   //Validation 
    body('email').isEmail(),
    body('password', 'incorrect password').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt)

    try {
        await User.create({
            Name: req.body.Name,
            email: req.body.email,
            password: secPassword,
            location: req.body.location
        })
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
})

router.post("/loginuser", [
    body('email').isEmail(),
    body('password', 'incorrect password').isLength({ min: 5 }),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    try {
        let userData = await User.findOne({ email });
        if (!userData) {
            return res.status(400).json({ errors: "email address not found!" });
        }

        const pswdcompare = await bcrypt.compare(req.body.password, userData.password)
        if (!pswdcompare) {
            return res.status(400).json({ errors: "email address and password does not match!" });
        }

        const data = {
            user: {
                id: userData.id
            }
        }

        const authToken = jwt.sign(data, jwtSecret);

        return res.json({ success: true, authToken: authToken });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
})

module.exports = router;