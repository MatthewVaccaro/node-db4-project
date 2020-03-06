const express = require("express");
const router = require("./router.js");

const server = express();

server.use(express.json());
server.use("/api", router);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome from Project 4" });
});

module.exports = server;
