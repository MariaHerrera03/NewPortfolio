import React, { useState } from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const AboutMe = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="about-me">
            <div className="about-me-fl">
                <div className="about-me-col-one"></div>
                <div className="about-me-col-two">
                    <div className="flower">
                        <h3>Hola :) Soy <b>María Fernanda Herrera</b>,</h3>
                        <div className="sub-flower"></div>
                    </div>
                    <h3>Una <b>Desarrolladora Web Full Stack Junior!!</b></h3>
                    <h2>Apasionada por el diseño de interfaces gráficas, los colores, las ilustraciones y las fuentes. Mi deseo de convertirme en programadora y diseñadora web nació de esta pasión.
                    Me caracterizo por ser atenta, dedicada y creativa, con habilidades interpersonales que me  ermiten trabajar en equipo de manera efectiva.
                    </h2>
                </div>
            </div>
            <div className="about-me-ex">
                <div className="about-me-col-three">
                    <button onClick={openModal} className="button-col-three">Skills | Habilidades</button>
                </div>
                <a href="https://cvmariaherrera.netlify.app/" target="_blank" className="about-me-col-four" rel="noreferrer">
                    <button className="button-col-four">Curriculum</button>
                </a>
            </div>
            <Modal className="modal" isOpen={isModalOpen} onRequestClose={closeModal}>
                <button onClick={closeModal} className="modal-close-button"><FontAwesomeIcon icon={faXmark} size="lg"/></button>
                <div className="modal-title">
                    <h3>Skills</h3>
                </div>
                <div className="modal-text">
                    <h2>Echa un vistazo a mi colección de insignias! Estos divertidos elementos representan algunas de mis habilidades adquiridas a lo largo del tiempo. Cada insignia es como un pequeño tesoro que he ido recolectando en mi viaje de desarrollo. </h2>
                </div>
                <div className="modal-grid">
                    <div className="cel-one"></div>
                    <div className="cel-two"></div>
                    <div className="cel-three"></div>
                    <div className="cel-four"></div>
                    <div className="cel-five"></div>
                    <div className="cel-six"></div>
                    <div className="cel-seven"></div>
                    <div className="cel-eight"></div>
                    <div className="cel-nine"></div>
                    <div className="cel-ten"></div>
                    <div className="cel-eleven"></div>
                    <div className="cel-twelve"></div>
                </div>
            </Modal>
        </section>
    )
}

export default AboutMe