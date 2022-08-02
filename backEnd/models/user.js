var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.methods = {
  authenticate: function (PasswordFromFrontEnd) {
    return PasswordFromFrontEnd === this.password;
  },
};

module.exports = mongoose.model("User", userSchema);
