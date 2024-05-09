const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
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

const PackageModel = mongoose.model("addpackage", PackageSchema);
module.exports = PackageModel;