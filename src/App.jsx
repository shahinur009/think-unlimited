import AboutUs from "./Components/AboutUs"
import ClientAboutUs from "./Components/ClientAboutUs"
import ConnectUs from "./Components/ConnectUs"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import NewArticle from "./Components/NewArticle"
import OurServices from "./Components/OurServices/OurServices"
import OurWorkFlow from "./Components/OurWorkFlow"
import Team from "./Components/Team"

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <OurServices />
        <OurWorkFlow />
        <AboutUs />
        <ClientAboutUs />
        <Team />
        <NewArticle />
        <ConnectUs />
        <Footer/>
      </div>
    </>
  )
}

export default App
