const { Users } = require('../users');

const loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await Users.findOne({ email: email });
    if (user) {
      const passwordCompare = user.validatePassword(password);
      user.getJWT();
      const ResponseBody = user.getPublicFields();
      passwordCompare
        ? res.status(200).json({ ResponseBody })
        : res.status(400).json({ message: 'Email or password not correct' });
    } else {
      res.status(404).json({ message: 'Some fields are missing' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = loginUser;
