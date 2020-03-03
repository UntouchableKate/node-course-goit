const currentUser = require ('./currentUser');
const loginUser = require ('./loginUser');
const logoutUser = require ('./logoutUser');
const registerUser = require ('./registerUser');
const authRouter = require ('./authRouter');

module.exports = {
  currentUser,
  loginUser,
  logoutUser,
  registerUser,
  authRouter,
};
