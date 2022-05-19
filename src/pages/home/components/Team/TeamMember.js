import React from 'react'

const teamMember = ({ name, image, role }) => {
    return (
        <div className='team-member'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    )
}

export default teamMember