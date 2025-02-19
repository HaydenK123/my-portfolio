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

// Contact Page
router.get('/contact', (req, res) => {
    res.render('contact');
});

// Projects Page
router.get('/projects', (req, res) => {
    res.render('projects');
});

module.exports = router;
