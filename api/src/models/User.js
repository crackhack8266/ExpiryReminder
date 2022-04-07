const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  isVerified: {
    type: Boolean,
    default: false,
  },
});
userSchema.set("timestamps", true);
userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      user.otp = otpGenerator.generate(5, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });
      next();
    });
  });
});

userSchema.methods.comparePassword = function (userPassword) {
  const user = this;
  return new Promise((resolve, reject) => {
    bcrypt.compare(userPassword, user.password, (err, isMatch) => {
      if (err) return reject(err);
      if (!isMatch) return reject(false);
      resolve(true);
    });
  });
};

module.exports = mongoose.model("User", userSchema);
