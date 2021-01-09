dbConnect();
import dbConnect from "../../utils/dbConnect";

const Article = require("../../Models/ArticleSchema");

export default async (req, res) => {
  if (req.method === "GET") {
    const articles = await Article.find();
    res.json({ data: articles });
  }
  if (req.method === "POST") {
    const newArticle = {
      title: req.body.title,
      subtitle: req.body.subtitle,
      date: new Date(),
      markdown: req.body.markdown,
    };
    const preArticle = new Article(newArticle);
    const savedArticle = await preArticle.save();
    res.json({ data: savedArticle });
    try {
    } catch (err) {}
  }
  if (req.method === "DELETE") {
    const articles = await Article.findByIdAndDelete(req.body.id);
    res.json({ data: "deleted" });
  }
  if (req.method === "PUT") {
    const articles = await Article.findByIdAndUpdate(req.body.id, req.body);
    res.json({ data: "updated" });
  }
};
