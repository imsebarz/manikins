import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import './App.scss'
import About from './components/About/About'
import Cta from './components/Cta/Cta'
import Hero from './components/Hero/Hero'
import Coffers from './components/Coffers/Coffers'
import Evolutions from './components/Evolutions/Evolutions'
import ComingSoon from './components/ComingSoon/ComingSoon'
import Carousel from '../../Components/Carousel'
import Costumes from './components/Costumes/Costumes'
import Features from './components/Features/Features'
import Nfts from './components/Nfts/Nfts'
import Team from './components/Team/Team'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <main>
        <Hero></Hero>
        <ComingSoon></ComingSoon>
        <About></About>
        <Nfts></Nfts>
        <Coffers></Coffers>
        <Evolutions></Evolutions>
        <Carousel></Carousel>
        <Costumes></Costumes>
        <Features></Features>
        <Team></Team>
        <Contact></Contact>
        <Cta></Cta>
        <Footer></Footer>
      </main>
    </div>
  )
}

export default App
