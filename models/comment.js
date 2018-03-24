const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = Schema({
  title: String,
  body: String,
  avatar: String,
  name: String
}, { timestamps: true });

CommentSchema.statics.new = entry => {
  let record = new Comment({ ...entry });
  record.save(err => err ? err : console.log("inserted comment"));
};

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
