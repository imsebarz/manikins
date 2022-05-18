import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import './App.scss'
import About from './components/About'
import Cta from './components/Cta.js'
import Hero from './components/Hero'
import Coffers from './components/Coffers'
import Evolutions from './components/Evolutions'
import ComingSoon from './components/ComingSoon'
import Carousel from '../../Components/Carousel'
import Costumes from './components/Costumes'
import Features from './components/Features'
import Nfts from './components/Nfts'
import Team from './components/Team'
import Contact from './components/Contact'

function App () {
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
