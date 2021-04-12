const mongoose = require("mongoose");
// Person Schema

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    score: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Score' }],
    date: {
        type: String,
    },

}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false,
});

const userModel = mongoose.model("User", userSchema, "user");
module.exports = userModel;