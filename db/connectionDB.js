const mongoose = require('mongoose');

function connectionDB() {
  mongoose.connect(
    'mongodb+srv://AdminKate:14886669wow@cluster0-ybgu3.mongodb.net/db-contacts?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    error => {
      if (error) {
        console.log('error:', error);
        process.exit(1);
      } else {
        console.log('Database connection successful');
      }
    },
  );
}

module.exports = connectionDB;
