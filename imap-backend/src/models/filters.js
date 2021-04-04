const mongoose = require("mongoose");

const filterSchema = new mongoose.Schema(
  {
    Tags: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    Types: {
      type: [{ type: String }],
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Filter", filterSchema);
