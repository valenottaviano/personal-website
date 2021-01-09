import React, { Fragment } from 'react'

export default function MeSection() {
    return (
        <Fragment>
            <section id="me-section">
                <div className="me-text">
                    <h3>Sobre mí</h3>
                    <p>Tengo un especial interés en las ciencias exactas, y junto con libros de divulgación científica, despertaron mí curiosidad por los mecanismos del mundo que nos rodea, llevándome a elegir para estudiar la licenciatura en Física.</p>
                    <p>A principio de 2020, decido fundar Agencia Ekam, sitio el cual me sirvió para realizar mis primeros trabajos como programador, realizando pequeñas y sencillas páginas web para clientes de mí entorno personal. Fue la puerta de entrada a otros proyectos que nunca hubiera pensado incurrir.</p>
                    <p>Soy desarrollador web de forma autodidacta, indagando por documentación y artículos por internet, pero la mayor fuente de aprendizaje fue, sin lugar a dudas, realizar proyectos, intentar de forma reiterada, consultando fuentes, hasta llegar a una solución válida para el problema en el que me encontrara. Actualmente, me especializo en el ecosistema MERN.</p>
                </div>
            </section>
            <style jsx>{`
                #me-section{
                    min-height: 50vh;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                }
                .me-text{
                    margin:2rem 0rem;
                    width:80vw;
                    padding: 5vw;
                    background: #F9F9F9
                }
                h3{
                    margin-bottom:2rem;
                    font-size: 2rem;
                    font-weight: 600;
                    color: #393735; 
                }
                p{
                    margin-top:1.5rem;
                }
                @media (max-width: 1200px){
                    .me-text{
                        width:90%;;
                        padding: 2rem;;
                        background: #F9F9F9
                    }
                }
            `}</style>
        </Fragment>
    )
}
