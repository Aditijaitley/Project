const mongoose = require("mongoose");

const SikkimSchema = new mongoose.Schema({
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

const SikkimModel = mongoose.model("addsikkim", SikkimSchema);
module.exports = SikkimModel;