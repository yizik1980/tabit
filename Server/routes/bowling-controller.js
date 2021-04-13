const express = require("express");
const userEntity = require("../model/entity/UserEntity");
const router = express.Router();
const obUserEntity = new userEntity();


router.get("/", (req, res) => {
    try {
        obUserEntity.getUsers().then((doc) => {
            if (doc)
                res.status(200).json(doc);
            res.status(400).json({ msg: "entity not found", doc });
        });
    } catch (e) {
        res.status(500).send(e);
    }

});

router.post('/', (req, res) => {
    try {
        if (req.body) {
            const result = obUserEntity.setUser(req.body);
            res.json(result)
        }
        res.status(301).json({ msg: 'no data sent' })

    } catch (e) {
        throw new Error(e);
    }
})

module.exports = router;