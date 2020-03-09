const sendErorr = (err, res) => {
  res.status (400).json ({
    error: err,
    message: err.message,
  });
};

module.exports = sendErorr;
