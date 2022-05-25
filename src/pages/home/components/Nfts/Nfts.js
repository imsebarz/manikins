import { useState } from 'react'
import './nfts.scss'
import character from '../../../../assets/character.png'
import Carousel from '../../../../Components/Carousel'
import manikin1 from '../../../../assets/manikin1.png'
import manikin2 from '../../../../assets/manikin2.png'
import manikin3 from '../../../../assets/manikin3.png'

const Nfts = () => {

  const [hover, setHover] = useState(false)


  const handleHover = (hoverState) => {
    setHover(hoverState)
    console.log(hover)
  }



  return (
    <section className="section-nfts">
      <div className="title">
        <h1 className="golden">
          YOU START LIKE EVERYONE ELSE <br />
          <span className='golden'>
            YOU END UP LIKE NO ONE ELSE
          </span>
        </h1>
        <p>A preview of many relics, they will be available in coffers</p>
      </div>
      <div className="character">
        <img src={character} alt="" />
        <div className="bubbles">
          <div className="item" id='item1' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}></div>
          <div className="item" id='item2' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}></div>
          <div className="item" id='item3' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}></div>
        </div>
      </div>
      <Carousel item1={manikin1} item2={manikin2} item3={manikin3} item4={manikin1}></Carousel>
    </section>
  )
}

export default Nfts
