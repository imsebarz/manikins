import React from 'react'
import person1 from '../../../../assets/teamMember1.png'
import person2 from '../../../../assets/teamMember2.png'
import person3 from '../../../../assets/teamMember3.png'
import person4 from '../../../../assets/teamMember4.png'
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
            We are a specialized and passionate group in the design and
            development of video games, with the aim of providing the best
            experiences to our players by implementing the best technologies.
          </p>
        </div>
        <div className="slider">
          <TeamMember name='Nombre de Persona' role='CEO' image={person1}></TeamMember>
          <TeamMember name='Nombre de Persona' role='CEO' image={person2}></TeamMember>
          <TeamMember name='Nombre de Persona' role='CEO' image={person3}></TeamMember>
          <TeamMember name='Nombre de Persona' role='CEO' image={person4}></TeamMember>
        </div>
      </section>
      <LazyLoadImage threshold={800} src={separatorDown} className='separator' alt="" />

    </>
  )
}

export default Team
