const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: String,
  membershipStatus: String,
  currentStatus: String,
  achievement: String,
  comment: String,
});

const Memberdb = mongoose.model("memberdb", schema);

module.exports = Memberdb;
