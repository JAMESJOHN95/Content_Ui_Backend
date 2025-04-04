const express = require('express');
const cors = require('cors');
const app = express();
const { getToken } = require('./index');
app.use(express.static('public')); // Serve static files from the 'public' directory
app.use(cors());

//Token Generation
app.post('/generate-token', async (req, res) => {
    try {
      const token = await getToken();
      console.log(token)
      res.json({ token });
    } catch (error) {
      console.error('Error in token generation endpoint:', error);
      res.status(500).json({ error: 'Failed to generate token' });
    }
  });

  module.exports.server = app;