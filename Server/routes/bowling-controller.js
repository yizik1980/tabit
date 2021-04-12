const express = require("express");
const userEntity = require("../model/entity/UserEntity");
const router = express.Router();

router.get("/", (req, res) => {});
router.post('/', (req, res) => {
    try {
        if (req.body) {
            const obUserEntity = new userEntity();
            obUserEntity.setUser(req.body);
        }


    } catch (e) {
        throw new Error(e);
    }
})

module.exports = router;