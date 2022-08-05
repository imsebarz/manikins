import React from 'react'

const Layer = ({ src, translateX, translateY, defer, id }) => {
    
    let x = (translateX * defer) /250 
    let y = (translateY * defer) / 250 
    
    console.log((src))

    
  return (
      <img className="layer" id={id} src={src} alt="banner layer" style={{ transform: `translateX(${x}px) translateY(${y}px)` }} />
  )
}

export default Layer