const express = require('express');
const chatController = require('../controllers/chat-controller');
const chatRouter = express.Router();

// Define the POST route for chat
chatRouter.post('/chat', chatController);

module.exports = chatRouter;
