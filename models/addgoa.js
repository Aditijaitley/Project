const mongoose = require("mongoose");

const GoaSchema = new mongoose.Schema({
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

const GoaModel = mongoose.model("addgoa", GoaSchema);
module.exports = GoaModel;