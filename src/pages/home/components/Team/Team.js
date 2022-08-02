import React from 'react'
import person1 from '../../../../assets/teamMember1.png'
import person2 from '../../../../assets/teamMember2.png'
import person3 from '../../../../assets/teamMember3.png'
import separatorTop from '../../../../assets/separatorTop.svg'
import separatorDown from '../../../../assets/separatorDown.svg'
import TeamMember from './TeamMember'
import './team.scss'
import textseparator from '../../../../assets/textseparator.svg'
import litg from '../../../../assets/litg.png'
import fryos from '../../../../assets/fryos.png'

import { LazyLoadImage } from 'react-lazy-load-image-component'

const Team = () => {
  return (
    <>
      <LazyLoadImage threshold={800} src={separatorTop} className='separator ft' alt="" />
      <section className='section-team'>
        <div className="title">
          <h1 className="golden">Our Team</h1>
          <LazyLoadImage threshold={800} src={textseparator} className="text-separator" alt="hero" />
          <div className="companies">
            <a href="https://lifeisthegame.dev/" target='_blank' rel="noreferrer">
              <LazyLoadImage threshold={800} src={litg} className="" alt="life is the game logo" />
            </a>
            <a href="https://fryosstudios.com/" target='_blank' rel="noreferrer">
              <LazyLoadImage threshold={800} src={fryos} className="" alt="fryos studio logo" />
            </a>
          </div>
          <p>
            Fryos Studios and Life Is The Game, join forces to carry out the project "Manikins: Relics and Tactics" . Both companies summed up more than 12 years of experience in the game industry. They have carried out more than 100 projects, have reached more than a million downloads on mobile platforms and currently have an in house team of 40 developers.
          </p>
        </div>
        <div className="slider">
          <TeamMember name='Nitae Uribe' role='Director' image={person1}></TeamMember>
          <TeamMember name='John Ayala' role='Producer' image={person2}></TeamMember>
          <TeamMember name='Elbin Marin' role='Lead Artist' image={person3}></TeamMember>
          <TeamMember name='Alex Sanabria' role='Tech Lead' image={person1}></TeamMember>
          <TeamMember name='Diego Duarte' role='Tech Artist' image={person2}></TeamMember>
        </div>
      </section>
      <LazyLoadImage threshold={800} src={separatorDown} className='separator' alt="" />
    </>
  )
}

export default Team
