import './nfts.scss'
import character from '../../../../assets/character.png'
import Carousel from '../../../../Components/Carousel'
import manikin1 from '../../../../assets/manikin1.png'
import manikin2 from '../../../../assets/manikin2.png'
import manikin3 from '../../../../assets/manikin3.png'
import bubble1 from '../../../../assets/bubble.svg'
import bubble2 from '../../../../assets/bubble2.svg'
import bubble3 from '../../../../assets/bubble3.svg'
import Bubble from './Bubble'
import { LazyLoadImage } from 'react-lazy-load-image-component'


const Nfts = () => {


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
        <LazyLoadImage threshold={800} src={character} alt="" />
        <div className="bubbles">
          <Bubble id='1' bubbleImg={bubble1}></Bubble>
          <Bubble id='2' bubbleImg={bubble2}></Bubble>
          <Bubble id='3' bubbleImg={bubble3}></Bubble>
        </div>
      </div>
      <Carousel item1={manikin1} item2={manikin2} item3={manikin3} item4={manikin1}></Carousel>
    </section>
  )
}

export default Nfts
