import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ReactMarkdown from "react-markdown/with-html";
import { format } from "date-fns";

export default function Article() {
  const router = useRouter();
  const { _id } = router.query;
  const [article, setArticle] = useState();

  useEffect(() => {
    const fetchingData = async () => {
      const fetched = await axios.post("/api/getArticle", { id: _id });
      setArticle(fetched.data.data);
    };
    fetchingData();
  }, [_id]);
  return (
    <Fragment>
      <section id="article">
        {article ? (
          <div className="article-container">
            <div className="article-header">
              <h3>{article.title}</h3>
              {/* <h4>{article.subtitle}</h4> */}
              <p>{format(Date.parse(article.date), "dd MMMM, yyyy")}</p>
            </div>
            <div className="article-body">
              <ReactMarkdown escapeHtml={false}>
                {article.markdown}
              </ReactMarkdown>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
      <style jsx>{`
        #article {
          width: 100%;
        }
        .article-header {
          padding-bottom: 4rem;
          margin-bottom: 4rem;
          border-bottom: 2px solid gray;
        }
        .article-header h3 {
          margin: 2rem 0rem;
        }
        .article-container {
          width: 50%;
          margin: 3rem auto;
          padding: 3rem;
          background-color: #f9f9f9;
        }

        @media (max-width: 1600px) {
          .article-container {
            width: 70%;
          }
        }
        @media (max-width: 800px) {
          .article-container {
            width: 90%;
            padding: 1rem;
          }
          .article-header h3 {
            font-size: 1.5rem;
          }
          .article-header h4 {
            font-size: 1rem;
          }
        }
      `}</style>
    </Fragment>
  );
}
