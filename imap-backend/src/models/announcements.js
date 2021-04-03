const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema(
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
    Comments: {
      // comID:[{type:Number}],
      userEmail: [{ type: String }],
      comment: [{ type: String, unique: false }],
    },
    Filter: {
      Batch: [{ type: String }],
      Department: [{ type: String }],
      Programs: [{ type: String }],
      Administration:[{type:String}],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Announcement", announcementSchema);
