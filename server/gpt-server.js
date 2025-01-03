const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

const apiKey = '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';

// const apiUrl = 'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium';            //sigma model
const apiUrl = 'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill';       // syckk

app.post('/chat', async (req, res) => {
    const { question } = req.body;

    if (!question) {
        return res.status(400).json({ message: 'Please provide a question.' });
    }

    try {
        const headers = {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        };

        const data = {
            inputs: question, 
        };

        const response = await axios.post(apiUrl, data, { headers });

        const generatedText = response.data[0].generated_text;

        res.json({ answer: generatedText }); 
    } 
    catch (error) {
        console.error('Error during API request:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
