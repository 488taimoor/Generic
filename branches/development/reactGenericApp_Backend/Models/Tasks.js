const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  description: {
    type: String,
  },
 
  taskImg: {
    type: String
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
},
status: {type: Schema.Types.ObjectId,  ref: "Status",  },
  createDate: { type: Date, default: Date.now},
  updateDate: { type: Date, default: Date.now},
  updatedBy: {type: Schema.Types.ObjectId,  ref: "User",  },
});

module.exports = mongoose.model("Tasks", UserSchema);
