const { model, Schema } = require("mongoose");

const UserSchema = Schema({
    name: String,
    password: String,
    email: String
});

const User = model("user", UserSchema);

module.exports = User;
