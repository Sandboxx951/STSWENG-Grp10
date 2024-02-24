const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import the path module

const app = express();

// Middleware configurations
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html')); // Send home.html when a request is made to the root URL ("/")
});

module.exports = app;