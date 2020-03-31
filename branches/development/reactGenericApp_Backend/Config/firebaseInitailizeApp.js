var admin = require("firebase-admin");

var serviceAccount = require("./genericapp-43cd5-firebase-adminsdk-t3phv-1059d91ec2.json");



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://medstack-312e7.firebaseio.com"
});
module.exports = {
  Admin : admin
};