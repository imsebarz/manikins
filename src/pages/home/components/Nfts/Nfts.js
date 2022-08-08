import './nfts.scss'
import platform from '../../../../assets/platform.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import separatorDown from '../../../../assets/separatorDown.svg'
import buildSelected from '../../../../assets/buildSelected.png'
import { useEffect, useState } from 'react'
import BuildPreview from './BuildPreview'




const Nfts = () => {

  const [image, setImage] = useState(null)
  const [selected, setSelected] = useState('1')
  const [relics, setRelics] = useState([])
  
    const [fileName, setfileName] = useState('triton')
  console.log(selected)
  useEffect(() => {
        const fetchImage = async () => {
          try {
              console.log(fileName)
                const pose = await import(`../../../../assets/${fileName}/pose.webp`) // change relative path to suit your needs
                const relic1 = await import(`../../../../assets/${fileName}/relic1.webp`) // change relative path to suit your needs
                const relic2 = await import(`../../../../assets/${fileName}/relic2.webp`) // change relative path to suit your needs
                const relic3 = await import(`../../../../assets/${fileName}/relic3.webp`) // change relative path to suit your needs
                const relic4 = await import(`../../../../assets/${fileName}/relic4.webp`) // change relative path to suit your needs
            setImage(pose.default)
            setRelics([relic1.default, relic2.default, relic3.default, relic4.default])
          } catch (err) {
            throw new Error(err)
            } 
        }
    fetchImage()
  }, [fileName])
  
  
  const changeCharacter = ( character, number) => {
    setfileName(character)
    setSelected(number)    
  }



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
              <BuildPreview
                image={buildSelected}
                number='1'
                selected={selected}
                changeCharacter={changeCharacter}
                character={'triton'}
              ></BuildPreview>
              <BuildPreview
                image={buildSelected}
                number='2'
                selected={selected}
                changeCharacter={changeCharacter}
                character={'fungi'}

              ></BuildPreview>
              <BuildPreview
                image={buildSelected}
                number='3'
                selected={selected}
                changeCharacter={changeCharacter}
                character={'bear'}
              ></BuildPreview>
          </div>
          <h2 className='golden'>Custom build</h2>
            <div className="relics">
              {relics.map((relic) => {
                console.log(relic)
                return(
                  <LazyLoadImage threshold={800} src={relic} alt='relic Icon with types' className="relic" />
                  )
              })}
          </div>
          <p>Manikins obtain their skills and stats from the equipped Battle Relics, the Manikins by themselves are empty shelves.</p>
        </div>
        <div className="platform-container">
        <LazyLoadImage threshold={800} src={image} alt="" className='pose' />
        <LazyLoadImage threshold={800} className='platform' src={platform} alt="" />
        </div>
      </div>
    </section>
    <LazyLoadImage threshold={800} src={separatorDown} className='separator separator-roadmap' alt="" />
</>
  )
}

export default Nfts
