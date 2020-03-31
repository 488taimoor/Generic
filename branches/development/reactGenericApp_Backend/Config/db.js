
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
const ConsoleSetting =require('./ConsoleSetting')
 const connectionstr =  "mongodb://localhost:27017/GenericApp";

const options = {
 
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10, useNewUrlParser: true

};
var db;
mongoose.connect(connectionstr, options).then(
  (dbObject) => {
    console.log("Database connection established!");
    db= mongoose.connection
    ConsoleSetting.TransformConsole()
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

module.exports = {

    'secret': '**GenericAppKey',
    'mongoClients':mongoose,
    'db':mongoose.connection

};
