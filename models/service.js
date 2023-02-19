const Message = require("./schema");

const getAllMessages = async () => {
  return await Message.find();
};

const createMessage = async (message) => {
  return await Message.create(message);
};

module.exports = { getAllMessages, createMessage };
