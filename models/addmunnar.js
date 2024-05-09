const mongoose = require("mongoose");

const MunnarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  days: {
    type: String,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  }

});

const MunnarModel = mongoose.model("addmunnar", MunnarSchema);
module.exports = MunnarModel;