const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
 
  email: {
    type: String,
    required: true,
  },
 
  phone: {
    type: Number,
    required: true,
  },
  dd: {
    type: Number,
    required: true,
  }, 
   mm: {
    type: Number,
    required: true,
  }, 
   yy: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  user_id: {
    type:String,
   
  },
  data:{
    type: String,
   
  }
  // ,
  // rate:{
  //   type: String,
  // }

  });

  const BookModel = mongoose.model("book", BookSchema);
  module.exports = BookModel;                                                     