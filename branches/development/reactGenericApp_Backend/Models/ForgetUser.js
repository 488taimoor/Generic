const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ForgetUserSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
    forgetToken: 
    {
        type: String,

    },

    expiryDate: 
    { 
        type: Date,
    },
    createdOn:
     { type: Date, default: Date.now},
})


  module.exports = mongoose.model("ForgetUser", ForgetUserSchema);
  