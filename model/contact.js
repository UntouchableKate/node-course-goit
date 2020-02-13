var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      index: true,
      minlength: 11,
    },
    phone: {
      type: String,
      minlength: 8,
    },
  },
  {
    timestamps: true,
  },
);

const Contact = mongoose.model('Contact', contactSchema, 'contacts');

module.exports = Contact;
