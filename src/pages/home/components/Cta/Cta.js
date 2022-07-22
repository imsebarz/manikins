import { useState } from 'react'
import './cta.scss'
import { joinWaitList } from '../../../../context/user/Actions'
import { useUserDispatch } from '../../../../context/user/State'
import textseparator from '../../../../assets/textseparator.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Cta = () => {
  const [mail, setMail] = useState('')
  const userDispatch = useUserDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    joinWaitList(userDispatch, mail)
    setMail('')
  }

  return (
    <section className="section-cta">
      <h1 className='golden'>REGISTER NOW!</h1>
      <LazyLoadImage threshold={800} src={textseparator} className="text-separator" alt="hero" />
      <div className='cta-input'>
        <p>
          Register now and be the first to know about manikins beta, relics sales, events and more!
        </p>
        <form className='cta-input-container' onSubmit={(e) => handleSubmit(e)}>
          <input type='email' required placeholder='Enter your email' value={mail} onChange={(e) => setMail(e.target.value)}></input>
          <button className='goldenButton'>REGISTER</button>
        </form>
      </div>
    </section>
  )
}

export default Cta
