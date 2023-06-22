import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const aboutMeSection = document.getElementById('aboutme');
        const projectsSection = document.getElementById('projects');
        const contactMeSection = document.getElementById('contactme');

        const aboutMeOffset = aboutMeSection.offsetTop;
        const projectsOffset = projectsSection.offsetTop;
        const contactMeOffset = contactMeSection.offsetTop;

        if (scrollTop >= aboutMeOffset && scrollTop < projectsOffset) {
            setIsScrolled(true);
        } else if (scrollTop >= projectsOffset && scrollTop < contactMeOffset) {
            setIsScrolled(true);
        } else if (scrollTop >= contactMeOffset) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-logo">
            <div><a href="/" className={`navbar-logo-link ${isScrolled ? 'scrolled' : ''}`} /></div>
        </div>
        <div className="navbar-categories">
            <ul>
            <li>
                <a href="#aboutme" className={`navbar-categories-link ${isScrolled ? 'scrolled' : ''}`}>
                <h2>Acerca de mí</h2>
                </a>
            </li>
            <li>
                <a href="#projects" className={`navbar-categories-link ${isScrolled ? 'scrolled' : ''}`}>
                <h2>Proyectos</h2>
                </a>
            </li>
            <li>
                <a href="#contactme" className={`navbar-categories-link ${isScrolled ? 'scrolled' : ''}`}>
                <h2>Contáctame</h2>
                </a>
            </li>
            </ul>
        </div>
        </nav>
    );
};

export default Navbar;
