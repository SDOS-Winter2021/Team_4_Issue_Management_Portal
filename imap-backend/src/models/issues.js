const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    
    userEmail: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    Desc: {
      type: String,
      trim: true,
      required: true,
    },
    Title: {
      type: String,
      trim: true,
      required: true,
    },
    Likes: {
      studEmail: [{ type: String }],
    },
    Comments: {
      //comID:[{type:Number, _id:true}],
      userEmail: [{ type: String }],
      comment: [{ type: String, unique: false }],
    },
    Filter: {
      Batch: [{ type: String }],
      Department: [{ type: String }],
      Programs: [{ type: String }],
      Administration:[{type: String}],
    },
    Tags: {
      Public: Boolean,
      Resolved: Boolean,
    },
    Archived: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Issue", issueSchema);
