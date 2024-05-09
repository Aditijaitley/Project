const mongoose = require("mongoose");

const PilSchema = new mongoose.Schema({
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

const PilModel = mongoose.model("addpil", PilSchema);
module.exports = PilModel;