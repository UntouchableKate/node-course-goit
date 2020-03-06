const { Users } = require('../users');

const logoutUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = req.user;

    const findUserByEmail = await Users.findOne({ email: email });

    if (findUserByEmail) {
      const passwordCompare = findUserByEmail.validatePassword(password);

      user.getJWT();
      if (passwordCompare) {
        res.status(200).json({ message: 'Logout succes' });
      }
    } else {
      res.status(401).json({ message: 'Not authorized' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = logoutUser;
