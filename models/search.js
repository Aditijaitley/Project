const mongoose = require("mongoose");

const SearchSchema = new mongoose.Schema({
 name: {
    type: String,
    required: true,
  }
});

const SearchModel = mongoose.model("search", SearchSchema);
module.exports = SearchModel;