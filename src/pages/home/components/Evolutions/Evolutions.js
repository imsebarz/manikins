import { LazyLoadImage } from 'react-lazy-load-image-component';
import relicevolutions from '../../../../assets/relicevolutions.webp'
import {ReactComponent as SeparatorTop} from '../../../../assets/separatorTop.svg'
import textseparator from '../../../../assets/textseparator.svg'
import './evolutions.scss'


const Evolutions = () => {

    return (
        <>
      <SeparatorTop className='separator evolutions'/>
        <section className="section-evolutions">
            <h1 className="title">EVERY RELIC HAS <span> EVOLUTIONS</span></h1>
            <div className='content'>
                <div className='copy'>
                    <h3>Increase your power</h3>
                    <LazyLoadImage threshold={800} src={textseparator} className="text-separator" alt="hero" />
                    <p>With every evolution the relic unlocks new features
                        and Powers , you can use it in the game to power
                        up your character.</p>
                    <div className="stages">
                    </div>
                </div>
                <LazyLoadImage threshold={800} src={relicevolutions} alt='magic helmet with evolutions' />
            </div>
        </section >
        </>
    )
}

export default Evolutions
