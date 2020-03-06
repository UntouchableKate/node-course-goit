const express = require('express');
const router = express.Router();

const registerUser = require('./registerUser');
const loginUser = require('./loginUser');
const logoutUser = require('./logoutUser');
const getCurrentUser = require('./currentUser');

const checkToken = require('../middleware/checkToken');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', checkToken, logoutUser);
router.get('/current', checkToken, getCurrentUser);

module.exports = router;
