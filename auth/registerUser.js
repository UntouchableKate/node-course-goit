const Users = require('../users/users.model');
const login = require('./loginUser');

const registerUser = async (req, res, next) => {
  try {
    const body = req.body;
    const email = req.body.email;
    const password = req.body.password;

    if (password && email) {
      const user = await new Users(body);

      const result = await user.save();

      if (result) {
        login(req, res);
      }
    } else if (!password || !email) {
      res.status(422).json({ message: 'Missing required fields' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = registerUser;
