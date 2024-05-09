const mongoose = require("mongoose");

const HeriSchema = new mongoose.Schema({
  pic: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  days: {
    type: String,
    required: true,
  },
  person: {
    type: String,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
  data:
  {
    type: String,
    required: true,
  }

});

const HeriModel = mongoose.model("addheri", HeriSchema);
module.exports = HeriModel;