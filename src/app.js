// Import the 'express' module and create an instance of the Express application
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL ('/')
app.get('/',(req, res)=>{
    // When a GET request is made to '/', respond with the html file located at the specified path.
    res.sendFile(path.join(__dirname, 'pages/index.html'));
});

// Set up the port to listen on, using the environment variable PORT or defaulting to 3000
const port = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});