import React, { Fragment, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import UserContext from "../UserContext";

export default function NewArticle() {
  const { userData, setUserData } = useContext(UserContext);
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [markdown, setMarkdown] = useState();
  const router = useRouter();

  if (typeof window !== "undefined") {
    if (userData.user === undefined) {
      router.push("/");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArticle = {
      title: title,
      subtitle: subtitle,
      markdown: markdown,
    };
    await axios.post("/api/articles", newArticle);
    router.push("/blog");
  };
  return (
    <Fragment>
      <section id="new-article">
        <form onSubmit={handleSubmit} autoComplete="off">
          <label>Título</label>
          <input
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label>Subtítulo</label>
          <input
            name="subtitle"
            value={subtitle}
            onChange={(e) => {
              setSubtitle(e.target.value);
            }}
          />
          <label>Markdown</label>
          <textarea
            name="markdown"
            value={markdown}
            onChange={(e) => {
              setMarkdown(e.target.value);
            }}
          />
          <button>Publicar Artículo</button>
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
