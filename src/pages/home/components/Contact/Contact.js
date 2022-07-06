import React from 'react'
import './contact.scss'
import arc from '../../../../assets/arc.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Contact = () => {
  return <section className='contact-section'>
    <LazyLoadImage threshold={800} src={arc} alt="" />
    <form action="">
      <div className="title">
        <h1 className='golden'>CONTACT US</h1>
        <p>Do not hesitate to contact us! We will get in touch with you as soon as posible</p>
      </div>
      <div className="info">
        <div className="personal">
          <input type="text" placeholder='name' />
          <input type="mail" placeholder='email' />
        </div>
        <div className="message">
          <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea>
        </div>
      </div>
      <button type='submit'>Send</button>

    </form>
  </section>
}

export default Contact
