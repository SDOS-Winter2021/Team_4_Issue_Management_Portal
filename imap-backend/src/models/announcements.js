const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema(
  {
    AnnouncementID: {
      type: Number,
      required: true,
      trim: true,
      unique: true,
      index: true,
    },
    AdminID: {
      type: Number,
      required: true,
      trim: true,
      index: true,
    },
    Desc: {
      type: String,
      trim: true,
      required: true,
    },
    AnnouncementTitle: {
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
      Dept: [{ type: String }],
      ProgType: [{ type: String }],
      // concernedDept:String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Announcement", announcementSchema);
