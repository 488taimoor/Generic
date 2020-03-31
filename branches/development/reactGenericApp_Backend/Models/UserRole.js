const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserRoleSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
    roleId: 
    {
        type: Schema.Types.ObjectId,
        ref: "Role"

    },

    createDate: 
    { 
        type: Date,
        default: Date.now
    },
    updateDate:
     { type: Date, default: Date.now},

})


  module.exports = mongoose.model("UserRole", UserRoleSchema);
  