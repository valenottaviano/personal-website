import React, { Fragment, useEffect, useState, useContext } from 'react'
import ArticlePreview from './ArticlePreview'
import axios from 'axios'
import { format } from "date-fns";



export default function BlogSection(props) {
    const [ rendered , setRendered] = useState([])

    useEffect(()=>{
        renderArticles()
    },[])

    const renderArticles = ()=>{
        let renderedArticles
        let articlesList = axios.get('/api/articles')
            .then(res=>{
                let fetchedArticles = res.data.data
                let sortedArticles = fetchedArticles.sort((a, b) =>Date.parse(b.date) - Date.parse(a.date))
                renderedArticles = sortedArticles.map(article=>{
                    return <ArticlePreview 
                    key={article.title} 
                    title={article.title}
                    subtitle={article.subtitle}
                    markdown={article.markdown}
                    articleId={article._id}
                    date={article.date}
                    updateDelete={renderArticles}
                    />
                })

                setRendered(renderedArticles)
            })  
    }
    
    
    return (
      <Fragment>
            <section id="blog-section">
                <h3>Blog</h3>
                <div className="articles-container">
                    {rendered}
                </div>
            </section>
            <style jsx>{`
                #blog-section{
                    min-height:50vh;
                    width: 70%;
                    margin: auto;
                    padding: 3rem 0rem;
                }
                h3{
                    margin-bottom:2rem;
                    font-size: 2rem;
                    font-weight: 600;
                    color: #393735; 
                }
                .articles-container{
                    width:100%;
                    display:grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    grid-gap:20px;
                }
                @media (max-width: 600px){
                    #blog-section{
                        width:90%;
                    }
                    h3{
                        width:80%;
                        padding-bottom: 2rem;
                        margin:auto;
                    }
                    .articles-container{
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        flex-direction:column;
                    }
                }
            `}</style>
      </Fragment>  
    )
}
