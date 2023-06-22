import Header from './Home/Header';
import AboutMe from './Home/AboutMe';
import InfiniteOne from './Home/AboutMeInfinite';
import InfiniteTwo from './Home/ProjectsInfinite';
import Projects from './Home/Projects';
import InfiniteThree from './Home/ContactMeInfinite';
import ContactMe from './Home/ContactMe';

function Home() {

    return (
        <>
        <Header/>
        <div id="aboutme">
            <InfiniteOne />
            <AboutMe />
        </div>
        <div id="projects">
            <InfiniteTwo />
            <Projects />
        </div>
        <div id="contactme">
            <InfiniteThree />
            <ContactMe />
        </div>
        </>
    );
}

export default Home;