const mongoose = require("mongoose");

const ManaliSchema = new mongoose.Schema({
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

const ManaliModel = mongoose.model("addmanali", ManaliSchema);
module.exports = ManaliModel;