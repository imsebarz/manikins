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
          BUILD YOUR TEAM <br />
          <span className='golden'>
            AND SHAPE YOUR OWN STRATEGY
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
          <h2 className='golden'>Custom build</h2>
          <div className="relics">
            <LazyLoadImage threshold={800} src={relicIcon0} alt='relic Icon with types' className="relic" />
            <LazyLoadImage threshold={800} src={relicIcon1} alt='relic Icon with types' className="relic" />
            <LazyLoadImage threshold={800} src={relicIcon2} alt='relic Icon with types' className="relic" />
            <LazyLoadImage threshold={800} src={relicIcon3} alt='relic Icon with types' className="relic" />
            <LazyLoadImage threshold={800} src={relicIcon4} alt='relic Icon with types' className="relic" />
          </div>
          <p>Manikins obtain their skills and stats from the equipped Battle Relics, the Manikins by themselves are empty shelves.</p>
        </div>
        <div className="platform">
        <LazyLoadImage threshold={800} src={character} alt="" />
        </div>
      </div>
    </section>
    <LazyLoadImage threshold={800} src={separatorDown} className='separator separator-roadmap' alt="" />
</>
  )
}

export default Nfts
