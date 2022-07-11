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
import Features from './components/Features/Features'
import Nfts from './components/Nfts/Nfts'
import Team from './components/Team/Team'
import Contact from './components/Contact/Contact'
import item1 from '../../assets/item1.png'
import item2 from '../../assets/item2.png'
import item3 from '../../assets/item3.png'
import item4 from '../../assets/item4.png'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <ComingSoon></ComingSoon>
        <About></About>
        <Evolutions></Evolutions>
        <Carousel item1={item1} item2={item2} item3={item3} item4={item4}></Carousel>
        <Nfts></Nfts>
        <Coffers></Coffers>
        <Features></Features>
        {/* <Team></Team> */}
        <Contact></Contact>
        <Cta></Cta>
        <Footer></Footer>
      </main>
    </div>
  )
}

export default App
