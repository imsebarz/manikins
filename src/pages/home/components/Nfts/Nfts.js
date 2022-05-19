import React from 'react'
import './nfts.scss'
import cardImage from '../../../../assets/card.png'
import character from '../../../../assets/character.png'
import Card from './Card'

const Nfts = () => {
  return (
    <section className="section-nfts">
      <div className="title">
        <h1 className="golden">NFT's ITEMS</h1>
        <p>A preview of many relics, they will be available in coffers</p>
      </div>
      <div className="interaction">
        <div className="cards">
          <Card cardImage={cardImage}></Card>
          <Card cardImage={cardImage}></Card>
          <Card cardImage={cardImage}></Card>
          <Card cardImage={cardImage}></Card>
          <Card cardImage={cardImage}></Card>
          <Card cardImage={cardImage}></Card>
        </div>
        <div className="character">
          <img src={character} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Nfts
