const getCurrentUser = (req, res) => {
  const user = req.user;

  if (user) {
    res.status(200).json({
      responseBody: user.getPublicFields(),
    });
  } else {
    res.status(401).json({
      message: 'Not authorized',
    });
  }
};

module.exports = getCurrentUser;
