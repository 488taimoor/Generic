const User = require("../Models/User");
const UserLogin = require("../Models/UserLogin");

const https = require('https')
const Config = require("../Config/config");

exports.LinkedInRedirectURL = (req, res) => {

    console.log("Auth code", req.query.code)
    console.log("Auth state", req.query.state)
    console.log("Auth status", req.query.status)
    var LinkedInTokenApi='https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&redirect_uri='+Config.LinkedInConfig.redirectUrl+'?status='+req.query.status+'&client_id='+Config.LinkedInConfig.client_id+'&client_secret='+Config.LinkedInConfig.clientSecret+'&code='+req.query.code+'&state='+req.query.state;
    console.log("LinkedInTokenApi\n", LinkedInTokenApi)
    https.get(LinkedInTokenApi, (resp) => {
      let data = '';
  
      resp.on('data', (chunk) => {
        data += chunk;
      });
    
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        console.log("json data:", data);
        var JSONdata=JSON.parse(data)
        console.log('access_token', JSONdata.access_token)
        if(JSONdata.access_token){
          var usertoken = new UserLogin({
            accessToken:JSONdata.access_token,
            isSocialLogin:'true',
            loginProvider: 'LinkedIn',
            state:req.query.status
          });
          usertoken.save((err, doc) => {
            if (!err) {
              console.log(doc)
              res.redirect(Config.LinkedInDeepLink);
            } else {
              console.log("Error: " + err)
              res.redirect(Config.LinkedInDeepLink);
            }
          });
        }else{
          console.log('data', JSONdata)
          res.redirect(Config.LinkedInDeepLink);
        }
      });
    
    }).on("error", (err) => {
      console.log("eer", err)
      res.redirect(Config.LinkedInDeepLink);
    });
    
  
  }
  
  
exports.LoginSocialUser = (req, res) => {
    console.log("user data:", req.body)
    var usertoken = new UserLogin({
      userId: req.body.doc._id,
      accessToken: req.body.accessToken,
      appToken: req.body.appToken,
      isSocialLogin: req.body.isSocialLogin,
      loginProvider: req.body.provider
    });
    usertoken.save((err, doc) => {
      if (!err) {
        console.log(doc)
        res.send({
          status: "success",
          message: "Login Successful",
          AccessToken: req.body.accessToken,
          Id: req.body.doc._id,
          loginProvider: req.body.provider
        });
      } else {
        console.log("Error: " + err)
        res.send({ status: "failure", message: "Token Generation Failed" });
      }
    });
  }
  
exports.SocialSignup = (req, res, next) => {
    console.log(req.body)
    var user = new User({
      email: req.body.email,
  
    });
    user.save((err, doc) => {
      if (!err) {
  
        req.body = { ...req.body, doc };
  
        next() //create login and access tokens
      } else {
        console.log("Error in User Save :" + JSON.stringify(err, undefined, 2));
        if (err.name === "MongoError" && err.code === 11000) {
          //duplicate email
          User.findOne({ email: req.body.email }, (err, doc) => {
            if (!err) {
  
              req.body = { ...req.body, doc };
              next() //create login and access tokens
            } else {
              res.send({ status: "failure", message: err.errmsg });
            }
          })
  
  
        }
        else
          res.send({ status: "failure", message: err.errmsg });
      }
    })
  }
  exports.UpdateIncompleteToken = (req, res) => {
    UserLogin.deleteOne({ state:req.body.status}, (err, doc) => {
      if (!err) {
        if (doc) {
           console.log(doc);
          res.send({
            doc:req.data.doc,
            status: "success",
          });
        } else {
          res.send({ status: "failure", warning: true, message: "Token is Invalid" });
        }
      } else {
      
        res.send({ status: "failure", error: true, message: err.errmsg });
      }
    });
  }

  exports.GetIncompleteToken =  (req, res, next) => {
  
    UserLogin.findOne({ loginProvider:req.body.provider, state:req.body.status }, (err, doc) => {
      if (!err) {
        if (doc) {
         req.data={
           doc:doc
         }
         console.log(doc)
         next()
          // res.send({
          //   doc,
          //   status: "success",
          // });
        } else {
          res.send({ status: "failure", warning: true, message: "Token is Invalid" });
        }
      } else {
      
        res.send({ status: "failure", error: true, message: err.errmsg });
      }
    });
  }