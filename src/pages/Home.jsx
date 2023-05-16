import Header from './Home/Header'
import AboutMe from './Home/AboutMe'
import InfiniteOne from './Home/AboutMeInfinite'
import Navbar from '../pages/Navbar'
import InfiniteTwo from './Home/ProjectsInfinite'
import Projects from './Home/Projects'
import InfiniteThree from './Home/ContactMeInfinite'
import ContactMe from './Home/ContactMe'

function Home() {

    return (
        <>
            <Navbar/>
            <Header/>
            <InfiniteOne/>
            <AboutMe/>
            <InfiniteTwo/>
            <Projects/>
            <InfiniteThree/>
            <ContactMe/>
        </>
    )
}

export default Home
