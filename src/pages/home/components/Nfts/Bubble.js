import React, { useState } from 'react'


const useBubble = ({ id, bubbleImg }) => {

    const [hover, setHover] = useState(false)
    const handleHover = (hoverState) => {
        setHover(hoverState)
        console.log(hover)
    }

    return (
        <>
            <div className="bubble" id={`bubble${id}`} onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>
                <img className='bubble-img' src={bubbleImg} alt="" />
                {hover &&
                <div className="bubble-info">
                        <h5>Epic Item</h5>
                        <p>Description about it</p>
                        <img src={bubbleImg} alt="" />
                        <a href="https://manikins.io">view at market</a>
                </div>
            }
            </div >
        </>
    )
}

export default useBubble