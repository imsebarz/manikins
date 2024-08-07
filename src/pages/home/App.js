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
import { useScroll } from '../../custom-hooks/useScroll'
import { useEffect, useState } from 'react'
import Modal from '../../Components/Modal'


function App() {

  const scroll = useScroll();
  const [hasAppeared, setAppeared] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  // console.log("estamos en " + scroll.y)

  useEffect(() => {
    if ((scroll.y > 1900) && (scroll.y < 2300) && (hasAppeared === false)) {
      // console.log(true)
      setAppeared(true)
      setOpenModal(true)
    }
  }, [scroll, hasAppeared])


  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    <div className="App">
      <Modal open={openModal} close={closeModal}></Modal>
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
