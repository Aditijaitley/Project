const mongoose = require("mongoose");

const ImgSchema = new mongoose.Schema({
  pic: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  }
});

const ImgModel = mongoose.model("addimg",ImgSchema);
module.exports = ImgModel;