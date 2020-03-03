const express = require ('express');
const router = express.Router ();

const registerUser = require ('./registerUser');
const loginUser = require ('./loginUser');
// const {logoutUser} = require ('./auth/logoutUser');
// const {getCurrentUser} = require ('./auth/currentUser');

router.post ('/register', registerUser);
router.post ('/login', loginUser);
// router.post ('/logout', logoutUser);
// router.get ('./current', getCurrentUser);

module.exports = router;
