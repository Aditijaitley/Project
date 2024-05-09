const mongoose = require("mongoose");

const AdvenSchema = new mongoose.Schema({
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

const AdvenModel = mongoose.model("addadven", AdvenSchema);
module.exports = AdvenModel;