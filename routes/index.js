const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
    res.render('home');
});

// About Page
router.get('/about', (req, res) => {
    res.render('about');
});

// Projects Page
router.get('/projects', (req, res) => {
    res.render('projects');
});

// Contact Page
router.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`New message from ${name} (${email}): ${message}`);

    res.send('Message sent! (Not actually sending yet, just logging.)');
});


module.exports = router;
