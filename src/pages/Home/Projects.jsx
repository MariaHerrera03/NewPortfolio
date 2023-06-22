import React, { useState } from 'react'
import img1 from '../../assets/img/Projects/UNOV.png'
import img2 from '../../assets/img/Projects/UNO.png'
import img3 from '../../assets/img/Projects/DOSV.png'
import img4 from '../../assets/img/Projects/TRESV.png'
import img5 from '../../assets/img/Projects/CUATROV.png'
import img6 from '../../assets/img/Projects/CINCOV.png'

const Projects = () => {
    const [activePanel, setActivePanel] = useState(-1);

    const panelClickHandler = (index) => {
        setActivePanel(index);
    };

    return (
        <div className="projects">
            <div className="projects-container">
                <div
                    className={`panel ${activePanel === 0 ? 'active' : ''}`}
                    style={{
                        backgroundImage: activePanel === 0
                        ? "url(https://images.unsplash.com/photo-1533130061792-64b345e4a833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)" : `url(${img1})`,
                    }}
                    onClick={() => panelClickHandler(0)}
                >
                    <h3>Explore The World</h3>
                </div>

                <div
                    className={`panel ${activePanel === 1 ? 'active' : ''}`}
                    style={{
                        backgroundImage:
                        activePanel === 1
                        ? "url(https://images.unsplash.com/photo-1533130061792-64b345e4a833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)" : `url(${img3})`,
                    }}
                    onClick={() => panelClickHandler(1)}
                >
                    <h3>Wild Forest</h3>
                </div>

                <div
                    className={`panel ${activePanel === 2 ? 'active' : ''}`}
                    style={{
                        backgroundImage:
                        activePanel === 2
                        ? "url(https://images.unsplash.com/photo-1533130061792-64b345e4a833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)" : `url(${img4})`,
                    }}
                    onClick={() => panelClickHandler(2)}
                >
                    <h3>Sunny Beach</h3>
                </div>

                <div
                    className={`panel ${activePanel === 3 ? 'active' : ''}`}
                    style={{
                        backgroundImage:
                        activePanel === 3
                        ? "url(https://images.unsplash.com/photo-1533130061792-64b345e4a833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)" : `url(${img5})`,
                    }}
                    onClick={() => panelClickHandler(3)}
                >
                    <h3>City on Winter</h3>
                </div>

                <div
                    className={`panel ${activePanel === 4 ? 'active' : ''}`}
                    style={{
                        backgroundImage:
                        activePanel === 4
                        ? "url(https://images.unsplash.com/photo-1533130061792-64b345e4a833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)" : `url(${img6})`,
                    }}
                    onClick={() => panelClickHandler(4)}
                >
                    <h3>Mountains</h3>
                </div>
            </div>
        </div>
    );
};

export default Projects;
