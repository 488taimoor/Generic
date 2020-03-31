const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatusSchema = new Schema({
  status: {
    type: String,
    trim: true
  },

  createDate: { type: Date, default: Date.now},
  updateDate: { type: Date, default: Date.now},
  updatedBy: {type: Schema.Types.ObjectId,  ref: "User",  },
});

module.exports = mongoose.model("Status", StatusSchema);
