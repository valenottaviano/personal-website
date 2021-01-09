import React, { Fragment, useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import UserContext from '../UserContext'

export default function NavBar() {
    const {userData , setUserData } = useContext(UserContext)
    return (
        <Fragment>
            <header>
                <nav>
                    <div className="logo-container" onClick={()=>{
                            document.querySelectorAll('.burger div').forEach(link=>{
                                link.classList.remove('toggle')
                            })
                            document.querySelector('.nav-links').classList.remove('active')
                        }}  >
                        <Link href="/"><h1>Valentín Ottaviano</h1></Link>
                    </div>

                    
                    <ul className="nav-links">


                        <Link href="/"><li onClick={()=>{
                            document.querySelectorAll('.burger div').forEach(link=>{
                                link.classList.remove('toggle')
                            })
                            document.querySelector('.nav-links').classList.remove('active')
                        }}  
                        className="nav-link">Home</li></Link>

                        <Link href="/#me-section"><li onClick={()=>{
                            document.querySelectorAll('.burger div').forEach(link=>{
                                link.classList.remove('toggle')
                            })
                            document.querySelector('.nav-links').classList.remove('active')
                        }}  
                        className="nav-link">Sobre mí</li></Link>

                        <Link href="/blog"><li onClick={()=>{
                            document.querySelectorAll('.burger div').forEach(link=>{
                                link.classList.remove('toggle')
                            })
                            document.querySelector('.nav-links').classList.remove('active')
                        }}  
                        className="nav-link">Blog</li></Link>

                        {userData.user !== undefined ? <Link href="/new-article"><li onClick={()=>{
                            document.querySelectorAll('.burger div').forEach(link=>{
                                link.classList.remove('toggle')
                            })
                            document.querySelector('.nav-links').classList.remove('active')
                        }}  
                        className="nav-link">Redactar</li></Link>
                        
                        :

                        <Link href="/login"><li onClick={()=>{
                            document.querySelectorAll('.burger div').forEach(link=>{
                                link.classList.remove('toggle')
                            })
                            document.querySelector('.nav-links').classList.remove('active')
                        }}  
                        className="nav-link">Login</li></Link>
                        }


                    </ul>
                    <div className="burger" onClick={()=>{
                        document.querySelector('.nav-links').classList.toggle('active')
                        document.querySelectorAll('.burger div').forEach(link=>{
                            link.classList.toggle('toggle')
                        })
                    }}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>
                </nav>
            </header>
            <style jsx>
                {`
                    header{
                        min-height:10vh;
                        width:100%;
                        display:flex;
                        align-items:center;
                    }
                    nav{
                        width:70%;
                        margin:auto;
                        display: flex;
                        align-items:center;
                        justify-content:space-around;
                    }
                    .logo-container{
                        flex:1
                    }
                    .nav-links{
                        display:flex;
                        align-items: center;
                        justify-content:space-between;
                        flex:1;
                        cursor:pointer;
                        transition:all 800ms ease;
                    }
                    .burger div {
                        width: 25px;
                        height: 3px;
                        background-color: #393735;
                        margin: 5px;
                        border-radius: 10px;
                    }
                    .burger {
                        display: none;
                    }
                    .burger div {
                        transition: all 0.3s ease;
                    }
                    .toggle.line1 {
                        transform: translateY(8px) rotate(45deg);
                    }
                    .toggle.line2 {
                        opacity: 0;
                    }
                    .toggle.line3 {
                        transform: translateY(-8px) rotate(-45deg);
                    }
                    @media (max-width: 1200px){
                        .nav-links {
                            z-index: 1;
                            position: fixed;
                            transform: translateX(100%);
                            top: 10vh;
                            right: 0px;
                            height: 90vh;
                            background-color: white;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            width: 100%;
                          }
                          .burger{
                              display:block;
                          }
                          .nav-links.active{
                              transform: translateX(0%)
                          }
                          .nav-link{
                              margin-bottom: 2rem;
                          }
                          h1{
                              font-size: 1rem;
                          }

                          nav{
                            width:80%;

                        }
                          @keyframes linksFade {
                            from {
                              opacity: 0;
                              transform: translateX(10rem);
                            }
                            to {
                              opacity: 1;
                              transform: translateX(0);
                            }
                          }
                          
                    }
                `}
            </style>
        </Fragment>
    )
}
