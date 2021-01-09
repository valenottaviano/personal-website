import React, {useState, useEffect, useContext} from 'react'
import Link from 'next/link'
import UserContext from "../UserContext";
import axios from 'axios'
import { format } from "date-fns";



export default function ArticlePreview(props) {
    const { userData, setUserData } = useContext(UserContext);
    const [auth , setAuth ] = useState(false)
    const [deleted , setDeleted] = useState(false)

    useEffect(() => {
        if (userData.user === undefined && auth === false) {
        } else {
            setAuth(true);
        }
    });

    const handleDelete = async ()=> {
        await axios.delete('/api/articles', {data: {id: props.articleId}} )
        props.updateDelete()
    }

    return (
        <>
            <div className="article-preview">
                {auth ? <div onClick={handleDelete} className="delete-button">Delete</div> : ""}
                <h3>{props.title}</h3>
                <p>{format(Date.parse(props.date), "dd MMMM, yyyy")}</p>
                <p>{props.subtitle}</p>
                <div className="options-container">
                    {auth ? <Link href={`/edit-article?id=${props.articleId}`}><span>Editar</span></Link> : ""}
                    <Link href={`/articles/${props.articleId}`}><span>Leer más</span></Link>
                </div>
            </div>
            <style jsx>
                {`
                .article-preview{
                    min-height:250px;
                    width: 100%;
                    background-color: #F9F9F9;
                    padding:2rem;
                    display:flex;
                    justify-content:center;
                    flex-direction:column;
                }
                h3,p{
                    margin-bottom:2rem;
                }
                h3{
                    font-size: 1.3rem;
                    font-weight: 600;
                    color: #393735; 
                }
                span{
                    align-self:flex-end;
                    text-decoration:underline;
                    cursor:pointer;
                }
                .delete-button{
                    align-self: flex-end;
                    cursor: pointer;
                }
                .options-container{
                    display:flex;
                    align-itmes:center;
                    justify-content:space-between;
                }
                @media (max-width: 600px){
                    .article-preview{
                        margin: 1rem 0rem;
                    }
                }

                `}
            </style>
        </>
    )
}
