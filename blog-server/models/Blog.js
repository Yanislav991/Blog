const mongoose = require("mongoose");
const User = require("./User");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: String,
  body: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: User,
});

module.exports = mongoose.model("Blog", blogSchema);
