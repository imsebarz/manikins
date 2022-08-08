import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'


const BuildPreview = ({ image, selected, number, changeCharacter, character }) => {
    console.log(selected, number)
    return (
           
                <LazyLoadImage
                    threshold={800}
                    src={image}
                    className={`build ${selected === number ? 'selected' : ''}`}
                    onClick={() => changeCharacter(character, number)}
                    
        />
    )
}

export default BuildPreview