import React, { Fragment, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import UserContext from "../UserContext";

export default function NewArticle() {
  const [article, setArticle] = useState({});
  const router = useRouter();
  const { userData, setUserData } = useContext(UserContext);

  if (typeof window !== "undefined") {
    if (userData.user === undefined) {
      router.push("/");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = {
      title: article.title,
      subtitle: article.subtitle,
      markdown: article.markdown,
      id: article.id,
    };
    await axios.put("/api/articles", updated);
    router.push("/");
  };

  useEffect(() => {
    const fetchArticle = async () => {
      const fetchedArticle = await axios.post("/api/getArticle", {
        id: router.query.id,
      });
      const { title, subtitle, markdown, _id } = fetchedArticle.data.data;
      setArticle({
        title: title,
        subtitle: subtitle,
        markdown: markdown,
        id: _id,
      });
    };
    fetchArticle();
  }, []);

  return (
    <Fragment>
      <section id="new-article">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Título</label>
          <input
            name="title"
            value={article.title}
            onChange={(e) => {
              setArticle((Rest) => {
                return { ...Rest, title: e.target.value };
              });
            }}
          />
          <label>Subtítulo</label>
          <input
            name="subtitle"
            value={article.subtitle}
            onChange={(e) => {
              setArticle((Rest) => {
                return { ...Rest, subtitle: e.target.value };
              });
            }}
          />
          <label>Markdown</label>
          <textarea
            name="markdown"
            value={article.markdown}
            onChange={(e) => {
              setArticle((Rest) => {
                return { ...Rest, markdown: e.target.value };
              });
            }}
          />
          <button>Editar Artículo</button>
        </form>
      </section>
      <style>
        {`
          #new-article{
              min-height:90vh;
              display:flex;
              align-items:center;
              justify-content:center;
          }
          form{
              display:flex;
              align-items:center;
              justify-content:center;
              flex-direction:column;
              box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25);
              padding:2rem;
          }
          input, textarea{
              padding: 0.5rem 1rem;
              border:none;
              background-color:#EBEBEB;
          }
          button{
            background-color:#393735;
            color:white;
            padding:1rem;
            margin-top: 2rem;
            border:none;
          }
          `}
      </style>
    </Fragment>
  );
}
