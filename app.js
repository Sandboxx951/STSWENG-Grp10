const express = require('express');
var hbs = require('express-hbs');
const bodyParser = require('body-parser');
const path = require('path'); // Import the path module

const app = express();
const port = 3000;

//uses handlebars for views
app.engine('hbs', hbs.express4({partialsDir: __dirname +'/public/views/partials'}));
app.set('view engine', 'hbs');
app.set('views', __dirname, '/public/views');

// Middleware configurations
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html')); // Send home.html when a request is made to the root URL ("/")
});

module.exports = app;

app.listen(port, () => console.log('App listening to port ${port}'));