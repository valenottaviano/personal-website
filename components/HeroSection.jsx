import React, { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
            </Head>
            <section id="hero-section">
                <div className="hero-text">
                    <h4>Hola! Mi nombre es Valentín!</h4>
                    <h2>Soy desarrollador web full-stack.</h2>
                    <p>Estudiante de licenciatura en Física y desarrollador web autodidacta. Comprometido con el trabajo bien hecho y la innovación tecnológica.</p>
                </div>
                <div className="hero-image">
                    <img src="img/hero-image.png"/>
                    <div className="icons">
                        <Link href="https://www.linkedin.com/in/valentin-ottaviano-45b1b71ab/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></Link>
                        <Link href="mailto:valentinottaviano@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg></Link>
                        <Link href="https://github.com/valenottaviano"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></Link>
                    </div>
                </div>
            </section>
            <style jsx>{
                `
                #hero-section{
                    min-height:90vh;
                    width:60%;
                    margin:auto;
                    display:flex;
                    justify-content: space-between;
                    align-items:center;
                }
                .hero-text{
                    width:40%;
                }
                .hero-image{
                    height:50vh;
                }
                .hero-image img{
                    height:100%;
                    object-fit:cover;
                }
                .hero-text p {
                    margin-top: 1rem;
                }
                .icons{
                    width:100%;
                    margin-top:1.5rem;
                    display:flex;
                    align-items:center;
                    justify-content:space-around;
                }
                
                @media (max-width: 1600px){
                    h2{
                        font-size:2.3rem;
                    }
                    h4{
                        font-size:1.3rem;
                        margin-bottom: 2rem;
                    }
                }
                @media (max-width: 1200px){
                    #hero-section{
                        flex-direction: column;
                        width:100%;
                    }
                    .hero-text{
                        width:60%;
                        margin: 3rem 0rem;
                    }
                }
                @media (max-width: 600px){
                    #hero-section{
                        padding-bottom: 4rem;
                    }
                    .hero-text{
                        width:80%;
                    }
                    h2{
                        font-size:1.8rem;
                    }
                    h4{
                        font-size: 1rem;
                    }
                    p{
                        font-size: 1rem;
                    }
                    .hero-image img{
                        height:100%;
                        object-fit: cover;
                    }
                }
                @media (max-width: 400px){
                    .hero-image img{
                        height:unset;
                        width:100%;
                        object-fit: cover;
                    }
                }
                `
            }</style>
        </Fragment>

    )
}
