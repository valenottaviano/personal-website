dbConnect();
import dbConnect from "../../utils/dbConnect";
const Article = require("../../Models/ArticleSchema");

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const article = await Article.findById(req.body.id);
      res.json({ data: article });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  }
};
