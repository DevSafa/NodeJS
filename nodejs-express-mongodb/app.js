const express = require('express');

const app = express();

// set up a simple response just to make sure everything is working properly
app.use((req,res) => {
    // If you try and make a request to your server, you should get back a JSON object
    // containing the message we have specified.
    res.json({message : 'Your request was successful!'});
})
module.exports = app;