import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'


const useBubble = ({ id, bubbleImg }) => {

    const [hover, setHover] = useState(false)
    const handleHover = (hoverState) => {
        setHover(hoverState)
    }

    return (
        <>
            <div className="bubble" id={`bubble${id}`} onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>
                <LazyLoadImage threshold={800} className='bubble-img' src={bubbleImg} alt="" />
                {hover &&
                    <div className="bubble-info">
                        <h5>Epic Item</h5>
                        <p>Description about it</p>
                        <LazyLoadImage threshold={800} src={bubbleImg} alt="" />
                        <a href="https://manikins.io">view at market</a>
                    </div>
                }
            </div >
        </>
    )
}

export default useBubble