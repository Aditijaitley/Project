const mongoose = require("mongoose");

const GoaPackageSchema = new mongoose.Schema({
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

const GoaPackageModel = mongoose.model("addgoapackage", GoaPackageSchema);
module.exports = GoaPackageModel;