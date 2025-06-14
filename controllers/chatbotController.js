const axios = require('axios');
const path = require('path');
const GEMINI_API_KEY = 'AIzaSyCetZW_P-mUg0QXdPHNZ4LikzXMmGgzVRA';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

// View
const showChatForm = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
};

// Handle chat request
const handleChat = async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post(
      GEMINI_URL,
      {
        contents: [
          {
            parts: [
              {
                text: userMessage
              }
            ]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

    const botReply = response.data.candidates[0].content.parts[0].text;
    res.json({ reply: botReply });

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Terjadi kesalahan saat menghubungi Gemini AI' });
  }

};

module.exports = {
  showChatForm,
  handleChat
};