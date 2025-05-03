import LogoSection from './sections/LogoSection.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import ShowcaseSection from './sections/ShowcaseSection.jsx';
import FeatureCards from './sections/FeatureCards.jsx';
import Experience from './sections/Experience';
import TechStack from './sections/TechStack.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';



const App = () => {
  return (
   
    <>
  <Navbar />
    <Hero/>
    <ShowcaseSection />
    <LogoSection />
    <FeatureCards />
    <Experience />
    <TechStack />
    <Testimonials />
    <Contact />
    <Footer />
   
    </>
  )
}

export default App
