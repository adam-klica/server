const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Route to handle incoming JSON data
app.post('/game-data', (req, res) => {
    const receivedData = req.body;
    console.log('Received JSON data:', receivedData);
    res.json({ message: 'JSON data received successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
