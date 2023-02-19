const { model, Schema } = require("mongoose");

const MessageSchema = Schema({
  text: String,
  author: String,
  time: String,
});

const Message = model("message", MessageSchema);

module.exports = Message;
