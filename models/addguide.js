const mongoose = require("mongoose");

const GuideSchema = new mongoose.Schema({
  name: {
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

const GuideModel = mongoose.model("addguide", GuideSchema);
module.exports = GuideModel;