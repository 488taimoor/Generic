
let jwt = require('jsonwebtoken');
const UserLogin = require("../Models/UserLogin");
var config = require("../Config/db");
var mongo = require('mongodb');


//api to authenticate a user through jwt token
exports.isUserAuthorized  = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase

    if (token) {
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          return res.json({
            status: "failure",
            AuthError: true,
            message: 'Token is not valid'
          });
        } else {
          req.decoded = decoded;
          console.log("decoded data", req.decoded )
          UserLogin.findOne({ AccessToken: token}, (err, doc) => {
            // find userId using user token
            if (!err) {
              //console.log(doc)
              if (doc) {
         
                next();
              } else {
                console.log("User Authentication failed");
                //  token is invalid
                res.send({ status: "failure", AuthError: true, message: "User Authentication failed" });
        
              }
            } else {
              console.log(err)
              res.send({ status: "failure", message: err });
            }
          });
        }
      });
    } else {
      return res.json({
        status: "failure",
        message: 'Auth token is not supplied'
      });
    }
}



exports.GenerateAccessToken  = (req, res) => {
  let UserId =  req.body.doc._id;

  if (UserId) {
    
      let token = jwt.sign({UserId: UserId},
        config.secret,
        // { 
        //   expiresIn: 60 // expires in 24 hours
        // }
      );
        req.data={
          token: token
        }
        console.log('insert Login token')
        var usertoken = new UserLogin({
          userId: req.body.doc._id,
          accessToken: token,
          appToken: req.body.AppToken
        });
        usertoken.save((err, doc) => {
          if (!err) {
            console.log(doc)
            res.send({
              status: "success",
              message: "Login Successful",
              AccessToken: token,
              Id: req.body.doc._id,
            });
          } else {
            console.log("Error: " + err)
            res.send({ status: "failure", message: "Token Generation Failed" });
          }
        });
 
  } else {
    res.send(400).json({
      status: "failure",
      message: 'Authentication failed! Please check the request'
    });
  }
}