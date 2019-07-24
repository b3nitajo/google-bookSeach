const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now },
  image: String,
  link: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
