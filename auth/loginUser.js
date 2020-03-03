const { Users } = require('../users');

const loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await Users.findOne({ email: email });
    console.log();
    if (user) {
      const passwordCompare = user.validatePassword(password);
      //   user.getJWT ();
      passwordCompare
        ? rex.status(200).json({ user: user.getPublicFields() })
        : res.status(404).json({ message: 'Email or password not correct' });
      // res.redirect('/current', 301)
    } else {
      res.status(404).json({ message: 'Some fields are missing' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = loginUser;
