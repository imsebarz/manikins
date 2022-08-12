import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import './App.scss'
import About from './components/About/About'
import Cta from './components/Cta/Cta'
import Hero from './components/Hero/Hero'
// import Coffers from './components/Coffers/Coffers'
import Evolutions from './components/Evolutions/Evolutions'
// import ComingSoon from './components/ComingSoon/ComingSoon'
import Nfts from './components/Nfts/Nfts'
import Team from './components/Team/Team'
// import Features from './components/Features/Features'
import Roadmap from './components/Roadmap/Roadmap'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        {/* <ComingSoon></ComingSoon> */}
        <About></About>
        <Nfts></Nfts>
        <Evolutions></Evolutions>
        {/* <Coffers></Coffers> */}
        {/* <Features></Features> */}
        <Roadmap></Roadmap>
        <Team></Team>
        <Cta></Cta>
        <Footer></Footer>
      </main>
    </div>
  )
}

export default App
