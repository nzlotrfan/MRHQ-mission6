const mongoose = require("mongoose");

const newMessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: false },
  message: { type: String, required: false },
});

const newMessageModel = mongoose.model("m6-email-submissions", newMessageSchema);
module.exports = newMessageModel;
