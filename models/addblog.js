const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  }
  ,
 blog: {
    type: String,
    required: true,
  }

});

const BlogModel = mongoose.model("addblog", BlogSchema);
module.exports = BlogModel;