import './nfts.scss'
import character from '../../../../assets/character.png'
import build from '../../../../assets/build.png'
import buildSelected from '../../../../assets/buildSelected.png'
import relicIcon0 from '../../../../assets/relicIcon0.png'
import relicIcon1 from '../../../../assets/relicIcon1.png'
import relicIcon2 from '../../../../assets/relicIcon2.png'
import relicIcon3 from '../../../../assets/relicIcon3.png'
import relicIcon4 from '../../../../assets/relicIcon4.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import separatorDown from '../../../../assets/separatorDown.svg'



const Nfts = () => {

  return (
    <>
    <section className="section-nfts">
      <div className="title">
        <h1>
          YOU START LIKE EVERYONE ELSE <br />
          <span className='golden'>
            YOU END UP LIKE NO ONE ELSE
          </span>
        </h1>
      </div>
      <div className="content">
        <div className="selectors">
          <div className="builds">
            <LazyLoadImage threshold={800} src={buildSelected} alt='manikin pre built with relics'  className="build" />
            <LazyLoadImage threshold={800} src={build} alt='manikin pre built with relics'  className="build" />
            <LazyLoadImage threshold={800} src={build} alt='manikin pre built with relics'  className="build" />
          </div>
          <h2 className='golden'>Manikin Customizable</h2>
          <div className="relics">
            <LazyLoadImage threshold={800} src={relicIcon0} alt='relic Icon with types' className="relic" />
            <LazyLoadImage threshold={800} src={relicIcon1} alt='relic Icon with types' className="relic" />
            <LazyLoadImage threshold={800} src={relicIcon2} alt='relic Icon with types' className="relic" />
            <LazyLoadImage threshold={800} src={relicIcon3} alt='relic Icon with types' className="relic" />
            <LazyLoadImage threshold={800} src={relicIcon4} alt='relic Icon with types' className="relic" />
          </div>
          <p>Combina las reliquias como quieras para <span>obtener el máximo poder</span></p>
        </div>
        <div className="platform">
        <LazyLoadImage threshold={800} src={character} alt="" />
        </div>
      </div>
    </section>
    <LazyLoadImage threshold={800} src={separatorDown} className='separator' alt="" />
</>
  )
}

export default Nfts
