const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["student", "admin", "superAdmin"],
      default: "student",
    },
    isBlocked: {
      type: String,
      default: "0",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
