import React from 'react'
import './contact.scss'
import arc from '../../../../assets/arc.png'

const Contact = () => {
  return <section className='contact-section'>
    <img src={arc} alt="" />
    <form action="">
      <div className="title">
        <h1>Contact us</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, ex!</p>
      </div>
      <div className="info">
        <div className="personal">
          <input type="text" placeholder='name' />
          <input type="mail" placeholder='email' />
        </div>
        <div className="message">
          <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea>
        </div>
        <button>Send</button>
      </div>

    </form>
  </section>
}

export default Contact
