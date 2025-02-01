require('dotenv').config();
const crypto = require('crypto');
const axios = require('axios');

// Fetch keys from environment variables
const secretKey = process.env.CHAT_SECRET_KEY; 
const API_KEY = process.env.CHAT_API_KEY;  // Now this is coming from .env

const chatbaseEndpoint = "https://www.chatbase.co/api";

const chatController = async (req, res) => {
    try {
        const { userData } = req.body;

        // Generate HMAC using SHA256
        const hmac = crypto.createHmac('sha256', secretKey);
        hmac.update(userData);
        const hmacDigest = hmac.digest('hex');

        // Prepare request data
        const requestData = {
            userData,
            hmac: hmacDigest,
        };

        // Send request to Chatbase
        const response = await axios.post(chatbaseEndpoint, requestData, {
            headers: { Authorization: `Bearer ${API_KEY}` }
        });

        res.json(response.data);
    } catch (error) {
        res.status(error.response ? error.response.status : 500).json({ message: error.message || 'Internal server error.' });
    }
};

module.exports = chatController;
