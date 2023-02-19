const Message = require("./schema");

const getAllMessages = async () => {
  return await Message.find().populate("author", 'name avatarUrl');
};

const createMessage = async (message) => {
  return await Message.create(message);
};

module.exports = { getAllMessages, createMessage };
