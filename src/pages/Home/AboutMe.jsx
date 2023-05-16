const AboutMe = () => {
    return (
        <section className="about-me">
            <div className="about-me-fl">
                <div className="about-me-col-one"></div>
                <div className="about-me-col-two">
                    <div className="flower">
                        <h3>Hola :) Soy <b>María Fernanda Herrera</b>,</h3>
                        <div className="sub-flower"></div>
                    </div>
                    <h3>Una <b>Desarrolladora Web Full Stack Junior!</b></h3>
                    <h2>Apasionada por el diseño de interfaces gráficas, los colores, las ilustraciones y las fuentes. Mi deseo de convertirme en programadora y diseñadora web nació de esta pasión.
                    Me caracterizo por ser atenta, dedicada y creativa, con habilidades interpersonales que me  ermiten trabajar en equipo de manera efectiva.
                    </h2>
                </div>
            </div>
            <div className="about-me-ex">
                <div className="about-me-col-three">
                    <button className="button-col-three">Skills | Habilidades</button>
                </div>
                <a href="https://cvmariaherrera.netlify.app/" target="_blank" className="about-me-col-four" rel="noreferrer">
                    <button className="button-col-four">Curriculum</button>
                </a>
            </div>
        </section>
    )
}

export default AboutMe