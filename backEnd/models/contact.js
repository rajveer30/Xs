var mongoose = require("mongoose");

var contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 32,
    trim: true,
  },

  phone: {
    type: String,
    maxLength: 12,
    trim: true,
  },

  email: {
    type: String,
    trim: true,
  },

  subject: {
    type: String,
    trim: true,
  },

  details: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
