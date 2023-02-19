const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const { getAllMessages, createMessage } = require("./models/service");
const authRouter = require("./routers/authRouter");

require("dotenv").config();

const app = express();
app.use(cors());
const http = require("http").Server(app);

app.use("api/auth", authRouter);

const socket = require("socket.io")(http, {
  cors: "https://gigachat-76i5.onrender.com",
});

global.onlineUsers = new Map();

socket.on("connection", async (user) => {
  user.emit("changeOnline", onlineUsers.size);
  console.log("Connected");
  user.emit("AllMessages", await getAllMessages());
  user.on("addUser", (data) => {
    onlineUsers.set(user.id, data.name);
    user.emit("changeOnline", onlineUsers.size);
    user.broadcast.emit("changeOnline", onlineUsers.size);
  });
  user.on("newMessage", (message) => {
    console.log(message);
    createMessage(message);
    user.broadcast.emit("showMessage", message);
  });
  user.on("disconnect", () => {
    onlineUsers.delete(user.id);
    user.broadcast.emit("changeOnline", onlineUsers.size);
  });
});

const { PORT, DB_HOST } = process.env;

mongoose.set("strictQuery", true);

mongoose.connect(DB_HOST, () => console.log(`Database connected`));

http.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
