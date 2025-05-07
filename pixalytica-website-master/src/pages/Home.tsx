import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <AboutSection/>
      <Footer />
    </>
  )
}

export default Home