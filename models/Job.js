const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
 
  phone: {
    type: String,
    required: true,
  },
   address: {
    type: String,
    required: true,
  },
 
 loc1: {
        type: String,
        required: true,
    },
     loc2: {
        type: String,
        required: true,
    },
   
    experience:{
      type: String,
      required:true,
    }
  });

  const JobModel = mongoose.model("Job", JobSchema);
  module.exports = JobModel;                                                     