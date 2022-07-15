import './nfts.scss'
import character from '../../../../assets/character.png'
import build from '../../../../assets/build.png'
import buildSelected from '../../../../assets/buildSelected.png'
import relicIcon from '../../../../assets/relicIcon.png'
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
      </div>
      <div className="content">
        <div className="selectors">
          <div className="builds">
            <img src={buildSelected} alt='manikin pre built with relics' className="build"></img >
            <img src={build} alt='manikin pre built with relics' className="build"></img >
            <img src={build} alt='manikin pre built with relics' className="build"></img>
          </div>
          <h2 className='golden'>Manikin Customisable</h2>
          <div className="relics">
            <img src={relicIcon} alt='relic Icon with types' className="relic"></img>
            <img src={relicIcon} alt='relic Icon with types' className="relic"></img>
            <img src={relicIcon} alt='relic Icon with types' className="relic"></img>
            <img src={relicIcon} alt='relic Icon with types' className="relic"></img>
          </div>
          <p>Combina las reliquias como quieras para obtener el máximo poder</p>
        </div>
        <div className="platform">
        <LazyLoadImage threshold={800} src={character} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Nfts
