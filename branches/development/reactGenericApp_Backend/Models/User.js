const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  dateOfBirth: {
    type: Date,
  
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    //required: true
  },
  
  UserImg: {
    type: String
  },
  allowNotification:{
    type: Boolean,
    default: true
  },

  createDate: { type: Date, default: Date.now},
  updateDate: { type: Date, default: Date.now},
  updatedBy: {type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("User", UserSchema);
