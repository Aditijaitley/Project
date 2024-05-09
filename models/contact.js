const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
 
 

   msg:{
      type: String,
      required:true,
    }
  });

  const ContactModel = mongoose.model("contact", ContactSchema);
  module.exports = ContactModel;                                                     