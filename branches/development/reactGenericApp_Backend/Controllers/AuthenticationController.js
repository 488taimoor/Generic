const User = require("../Models/User");
const UserLogin = require("../Models/UserLogin");
const UserForgotPasswords = require("../Models/UserForgotPasswords");
var bcrypt = require("bcrypt");
const https = require('https')
var randomize = require('randomatic');
const saltRounds = 10;



exports.signUpUser = (req, res, next) => {

  // inserts user email and password data to 'users' collection

  var userpass = req.body.password; //Get user password
  bcrypt.hash(userpass, saltRounds, function (err, hash) {
    if (!err) {
      var user = new User({
        email: req.body.email.toLowerCase(),
        password: hash,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      });
      user.save((err, doc) => {
        // save user record in mongodb
        if (!err) {

          //get appToken if user is created from an app
          var AppToken = req.body.appToken

          req.body = { doc, AppToken: AppToken };

          next() //create login and access tokens
        } else {
          console.log("Error in User Save :" + JSON.stringify(err, undefined, 2));
          if (err.name === "MongoError" && err.code === 11000) {
            // Duplicate email
            res.send({ status: "duplicate", message: "Email already exist!" });
          } else
            res.send({ status: "failure", message: err.errmsg });
        }
      });
    } else {
      res.send({ status: "failure", message: err });
    }
  });
}


//login user api. use apptoken and allowinotification field to handle for each device.
exports.LoginUser = (req, res, next) => {
  console.log(req.body)
  // Get user email and password
  userEmail = req.body.email.toLowerCase();
  userPassword = req.body.password;
  User.findOne({ email: userEmail }, (err, doc) => {
    // find user record using email input
    if (!err) {
      if (doc) {
        //if the record exists json array will have length grater than 0
        hash = doc.password; // get mongodb password stored as hash value
        bcrypt.compare(userPassword, hash, function (err, cmp) {
          if (cmp) {

            var AppToken = req.body.appToken
            // var allowNotification= req.body.allowNotification
            req.body = {
              doc, AppToken: AppToken,
              //  allowNotification: allowNotification
            };
            console.log("User has authorized:", req.body)
            next() //create access token for authorization and create login
            //  GenerateAccessToken(doc, res);
          } else {
            res.send({ status: "failure", message: "Incorrect password" });
          }
        });

      } else {
        res.send({ status: "failure", message: "Incorrect email" });
      }
    } else {
      // console.log("Error :" + JSON.stringify(err, undefined, 2));
      res.send({ status: "failure", message: err.errmsg });
    }
  });
};


//logout user remove all user login objects when user logout.
exports.LogoutUser = (req, res) => {
  console.log(req.body)
  UserId = req.body.UserId;

  UserLogin.deleteMany({ userId: UserId }, (err, doc) => {
    if (!err) {
      if (doc) {
        // console.log(doc);  res.send({ status: "success", warning: true, message: "Token is Invalid" });
        res.send({
          status: "success",
          details: doc,
          message: "Successfully Deleted"
        });
      } else {
        res.send({ status: "success", warning: true, message: "Token is Invalid" });
      }
    } else {
      // console.log("Error :" + JSON.stringify(err, undefined, 2));
      res.send({ status: "failure", error: true, message: err.errmsg });
    }
  });
};

exports.CheckForgotPasswordEmail = (req, res, next) => {

  Email = req.body.email.toLowerCase();
  //   DOB= req.body.dateOfBirth;
  User.findOne({ email: Email }, (err, doc) => {
    if (!err) {
      if (doc) {
        console.log("account exists:", doc)
        next() // send email it account exists
      }
      else {
        res.send({ status: "Not Found", message: "Email not found", acount_not_found: true });
      }
    } else {
      res.send({ status: "failure", message: err, });
    }
  })

}


exports.SetPasswordResetCode = (req, res, next) => {
  console.log("handling Search customer", req.body)
  var ResetCode = randomize('0', 6);
  Email = req.body.email.toLowerCase();
  bcrypt.hash(ResetCode, 10, async function (err, hash) {
    if (hash) {
      req.ResetCode = ResetCode

      UserForgotPasswords.findOneAndUpdate({ UserEmail: Email }, { ResetToken: hash, timestamp: Date.now() }, (err, doc) => {
        if (!err) {
          if (doc) {
            req.data = doc
            next()

          }
          else {
            var resetPassword = new UserForgotPasswords({
              UserEmail: Email,
              ResetToken: hash
            });
            resetPassword.save((err, doc) => {
              if (!err) {
                req.data = doc
                next()

              } else {
                console.log(err)
                res.send({ status: "failure", message: "Token Generation Failed" });
              }
            })
          }

        } else {
          res.send({ status: "failure", message: "Token Generation Failed" });
        }
      })
    }
  })

}

exports.CheckResetCode = (req, res) => {
  console.log(req.body)
  ResetCode = req.body.ResetCode
  Email = req.body.email;

  UserForgotPasswords.findOne({ UserEmail: Email }, (err, doc) => {
    // find user record using email input
    if (!err) {
      if (doc) {
        //if the record exists json array will have length grater than 0
        hash = doc.ResetToken; // get mongodb password stored as hash value
        console.log("hash: " + hash)
        bcrypt.compare(ResetCode, hash, function (err, cmp) {
          if (cmp) {
            console.log("Confirm Password Update Request")
            res.send({ status: "success", message: "Confirm Password Update Request" });
          } else {
            console.log("Incorrect code")
            res.send({ status: "failure", message: "Incorrect code" });
          }
        });
      }
    } else {

      res.send({ status: "failure", message: err.errmsg });
    }
  })
}



exports.UpdateForgotPassword = async (req, res) => {
  Email = req.body.email;
  newpass = req.body.password
  console.log("Body of update password:", req.body)
  bcrypt.hash(newpass, saltRounds, async function (err, hash) {
    if (!err) {
      User.findOneAndUpdate(
        { email: Email },
        {
          password: hash
        },
        { new: true },
        async (err, doc) => {
          if (!err) {

            res.send({ status: "success", message: "Update Successful" });
          } else {
            console.log(err)
            res.send({ status: "failure", "err": err.errmsg });
          }
        });
    }
  })

}