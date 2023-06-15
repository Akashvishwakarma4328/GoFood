const express = require('express');
const router = express.Router()
const User = require('../models/Users')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const jwtSecret = "Hiiamakashthisismyprojectofgoofo"


router.post("/createUser", [body('email').isEmail(),
        body('name').isLength({ min: 3 }),
        body('passwoard').isLength({ min: 5 })
    ],

    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let securePasswoard = await bcrypt.hash(req.body.passwoard, salt);


        try {
            await User.create({
                name: req.body.name,
                passwoard: securePasswoard,
                email: req.body.email,
                location: req.body.location
            }).then(res.json({ sucess: true }))

        } catch (error) {
            console.log("error aa gya bhai");
            res.json({ sucess: false });
        }
    }
)


router.post("/loginUser", [body('email').isEmail(),

    body('passwoard').isLength({ min: 5 })
], async(req, res) => {
    const errors = validationResult(req);
    // console.log(req.body);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    let email = req.body.email;
    let passwoard = req.body.passwoard;

    try {
        let userDetail = await User.findOne({ email })
        if (!userDetail) {
            return res.status(400).json({ errors: errors.array() });
        }
        const comaredPasswoard = bcrypt.compare(passwoard, userDetail.passwoard);
        if (!comaredPasswoard) {
            return res.status(400).json({ errors: errors.array() });
        }
        const data = {
            user: {
                id: userDetail.id
            }
        }

        const authToken = jwt.sign(data, jwtSecret)

        return res.status(200).json({ seccess: true, authToken: authToken });


    } catch (error) {
        console.log("error aa gya bhai");
        res.json({ sucess: false });
    }
})

module.exports = router;