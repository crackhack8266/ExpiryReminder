const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.pre("save", function (next) {
  // this is pre save hook which will run the function before saving the instance of user to the database
  const user = this;
  if (!user.isModified("password")) {
    // this will check wheather user have modified the "password" filed or not. if password is not modified than this funciton block will be run
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    //10 is the complexity of the salt and this line of code will generate the Salt
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      //user.password will have the password which user is trying to sign up than the second argument is the salt that we want to add it to the password
      //third is the callback function with arguments err and hash (which will be generated using this line of code)
      if (err) {
        return next(err);
      }
      user.password = hash; // we will save the hash password to the user.password variable;
      next();
    });
  });
});

//for login password checking method

userSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;
  // we didnt use arrow func as we have to use this keyword;
  //candidatePassword will be the password which user will enter while login process
  return new Promise((resolve, reject) => {
    // we used promise here because we want to use async await syntax while comparing the passwords
    //invoked automatically with two arguments resolve and reject
    // if some code inside here works well than we will send resolve and resolve the entire promise
    // otherwise we will call reject if code doesnt works well and  we will reject the promise
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }
      if (!isMatch) {
        return reject(false);
      }
      resolve(true);
    });
  });
};
mongoose.model("User", userSchema);
