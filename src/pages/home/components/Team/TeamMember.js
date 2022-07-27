import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './teamMember.scss'


const teamMember = ({ name, image, role }) => {
    return (
        <div className='team-member'>
            <LazyLoadImage threshold={800} src={image} alt="" />
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    )
}

export default teamMember