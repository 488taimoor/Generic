const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserNotificationSchema = new Schema({

    UserId: {
        type: Schema.Types.ObjectId,
        ref: "GenericUser",
    },
    title: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
      data: {
        type: Object
      },
      readstatus: {
        type: Boolean,
        default: false,
      },
      type:
      {
        type:String
      },

    createDate: { type: Date, default: Date.now},
    updateDate: { type: Date, default: Date.now},
})


  module.exports = mongoose.model("UserNotification", UserNotificationSchema);
  