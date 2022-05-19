import React from 'react'
import person from '../../../../assets/person.png'
import TeamMember from './TeamMember'
import './team.scss'

const Team = () => {
  return (
    <section className='section-team'>
      <div className="title">
        <h1 className="golden">Our Team</h1>
        <p>
          We are a specialized and passionate group in the design and
          development of video games, with the aim of providing the best
          experiences to our players by implementing the best technologies.
        </p>
      </div>
      <div className="slider">
        <TeamMember name='Nombre de Persona' role='CEO' image={person}></TeamMember>
        <TeamMember name='Nombre de Persona' role='CEO' image={person}></TeamMember>
        <TeamMember name='Nombre de Persona' role='CEO' image={person}></TeamMember>
        <TeamMember name='Nombre de Persona' role='CEO' image={person}></TeamMember>
        <TeamMember name='Nombre de Persona' role='CEO' image={person}></TeamMember>
        <TeamMember name='Nombre de Persona' role='CEO' image={person}></TeamMember>
      </div>
    </section>
  )
}

export default Team
