const mongoose = require("mongoose");

const AmritSchema = new mongoose.Schema({
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

const AmritModel = mongoose.model("addamrit", AmritSchema);
module.exports = AmritModel;