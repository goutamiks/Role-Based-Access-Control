const express = require('express');
const verifyToken = require('../middlewares/authMiddleware');
const router = express.Router();

// Only admin can access this route
router.get('/admin', verifyToken, (req, res) => {
    res.json({ message: "Welcome Admin"});
});
// Both admin and manager can access this route
router.get('/manager', verifyToken, (req, res) => {
    res.json({ message: "Welcome Manager"});
});
// All can access this route
router.get('/user', (req, res) => {
    res.json({ message: "Welcome User"});
});

module.exports = router;