const express = require('express');
const router = express.Router()
const User = require('../models/Users')
const { body, validationResult } = require('express-validator');

router.post("/createUser", [body('email').isEmail(),
        body('name').isLength({ min: 3 }),
        body('passwoard').isLength({ min: 5 })
    ],

    async(req, res) => {
        const errors = validationResult(req);
        console.log(req.body);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // res.send({ errors: result.array() });
        try {
            await User.create({
                name: req.body.name,
                passwoard: req.body.passwoard,
                email: req.body.email,
                location: req.body.location
            }).then(res.json({ sucess: true }))

        } catch (error) {
            console.log("error aa gya bhai");
            res.json({ sucess: false });
        }
    })
module.exports = router;