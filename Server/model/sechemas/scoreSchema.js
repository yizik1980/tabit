const mongoose = require('mongoose');
// Person Schema
const frameResult = new mongoose.Schema({
    results: []
});
const scoreSchema = mongoose.Schema({
    score: {
        type: [
            []
        ]
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});

const scoreEntityModel = mongoose.model("Score", scoreSchema, "score");
module.exports = scoreEntityModel;