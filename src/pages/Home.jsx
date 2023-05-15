import Header from './Home/Header'
import AboutMe from './Home/AboutMe'
import Infinite from './Home/AboutMeInfinite'
import Navbar from '../pages/Navbar'

function Home() {

    return (
        <>
            <Navbar/>
            <Header/>
            <Infinite/>
            <AboutMe/>
        </>
    )
}

export default Home
