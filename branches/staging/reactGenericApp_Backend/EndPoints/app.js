
// app.js
const cors = require('cors');
const express = require("express");
var path = require('path')
var multer = require('multer')
const bodyParser = require("body-parser");
var config = require("../Config/db");
// const JWTauth = require("../Controllers/JWTauth");
const app = express();
var session = require('express-session')
mailer = require('express-mailer');

// const AuthenticationController = require("../Controllers/AuthenticationController");

// const SocialLoginController = require("../Controllers/SocialLoginController");

mailer.extend(app, {
  from: 'no-reply@example.com',
  host: 'smtp.gmail.com', // hostname
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: 'webgenestore@gmail.com',
    pass: 'Resource123!'
  }
});

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