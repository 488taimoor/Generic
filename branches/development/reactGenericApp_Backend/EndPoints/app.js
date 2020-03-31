
// app.js
const cors = require('cors');
const express = require("express");
//var path = require('path')
var multer = require('multer')
const bodyParser = require("body-parser");
var config = require("../Config/db");
const JWTauth = require("../Controllers/JWTauth");
const app = express();
var session = require('express-session')
mailer = require('express-mailer');
const Config = require("../Config/config");
const AuthenticationController = require("../Controllers/AuthenticationController");
const UserTaskController = require("../Controllers/UserTaskController");
const SocialLoginController = require("../Controllers/SocialLoginController");
const NotificationController = require("../Controllers/NotificationController");

mailer.extend(app, Config.EmailConfig);

app.set('superSecret', config.secret)
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: true,
  maxAge: 3600000
}));
const port = process.env.PORT || 3302;
app.use(cors());
app.options('*', cors());

var storage = multer.diskStorage({
  destination: function (req, file, callback) {

    callback(null, './public/img');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + '-' + file.originalname);
  }
});

//var auth = require('../EndPoints/auth');

var upload = multer({ storage: storage });
app.use(express.static('public/img'));

app.use(upload.any('photo'));

app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));


app
  .route("/api/user/createNotificationByUser")
  .post(NotificationController.isNotificationAllowed, NotificationController.createNotificationByUser)

  app
  .route("/api/user/createMultiUserNotification")
  .post(NotificationController.isNotificationAllowedByMultiUsers, NotificationController.createMultipleNotificationsByUser)

app
  .route("/api/user/signUp")
  .post(AuthenticationController.signUpUser, JWTauth.GenerateAccessToken)

  app
  .route("/api/user/SocialSignup")
  .post(SocialLoginController.SocialSignup, SocialLoginController.LoginSocialUser)

app
  .route("/api/user/login")
  .post(AuthenticationController.LoginUser, JWTauth.GenerateAccessToken)

app
  .route("/api/user/logout")
  .post(AuthenticationController.LogoutUser)

app
  .route("/api/user/SendForgotPasswordEmail")
  .post(AuthenticationController.CheckForgotPasswordEmail, AuthenticationController.SetPasswordResetCode, sendEmailToSetPassword)

app
  .route("/api/user/CheckResetCode")
  .post(AuthenticationController.CheckResetCode)

  app
  .route("/LinkedInRedirect")
  .get(SocialLoginController.LinkedInRedirectURL)

app
  .route("/api/user/UpdateForgotPassword")
  .post(AuthenticationController.UpdateForgotPassword)

  app
  .route("/api/user/GetIncompleteToken")
  .post(SocialLoginController.GetIncompleteToken, SocialLoginController.UpdateIncompleteToken )

  app
  .route("/api/user/handleTaskCreation")
  .post(UserTaskController.handleTaskCreation )

  app
  .route("/api/user/getTasksByUserId/:UserId")
  .get(UserTaskController.getTasksByUserId )

function sendEmailToSetPassword(req, res) {
  var Email = req.body.email.toLowerCase();
  console.log("reset code ", req.ResetCode)
  app.mailer.send('email', {
    to: Email, // REQUIRED. This can be a comma delimited string just like a normal email to field. 
    subject: 'Reset Code', // REQUIRED.
    ResetData: {  // data to view template, you can access as - user.name
      resetCode: req.ResetCode

    }
  }, function (err) {
    if (err) {
      // handle error
      console.log(err);
      res.send({ status: "failure", message: "Email sent Failed" });
    } else {
      res.send({
        status: "success",
        message: "Email Sent Successful",
      });
    }
  });

}


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});