const express = require('express');
const router = express.Router();
const { showChatForm, handleChat } = require('../controllers/chatbotController');

// Define the route for the chatbot
router.get('/', showChatForm);
router.post('/post', handleChat);

module.exports = router;