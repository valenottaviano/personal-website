const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  subtitle: { type: String, required: true },
  date: { type: Date },
  markdown: { type: String, required: true },
});

let Article =
  mongoose.models.Article || mongoose.model("Article", ArticleSchema);

module.exports = Article;
