const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserLoginSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    accessToken: {
        type: String,
    },
    isSocialLogin:{
        type:Boolean
    },
    loginProvider:{
        type:String
    },
    state:{
        type:String
    },
    appToken:
    {
        type:String,
    },
    createDate: { type: Date, default: Date.now},
    updateDate: { type: Date, default: Date.now},
})


  module.exports = mongoose.model("UserLogin", UserLoginSchema);
  