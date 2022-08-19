import Popup from 'reactjs-popup';
import './modal.scss'
import helmet from '../assets/helmetModal.png'
import { useState } from 'react';
import { useUserDispatch } from '../context/user/State';
import { joinWaitList } from '../context/user/Actions';

const Modal = ({open, close}) => {
  const [mail, setMail] = useState('')
  const userDispatch = useUserDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    joinWaitList(userDispatch, mail)
    setMail('')
  }

  return (
    <Popup
        open={open}
        onClose={(() => close())}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>&times;</button>
            <img src={helmet} alt="" />
                  <div className="content">
                      <div className="title">
                            <h1 className='golden'>Subscribe</h1>
                            <h2>To the waiting list</h2>
                      </div>
                      <form action="" onSubmit={(e) => handleSubmit(e)}>  
                      <input type='email' required value={mail} onChange={(e) => setMail(e.target.value)} placeholder='Enter your email' />
                      <button className='goldenButton'>Waitlist</button>
                      </form>
            </div>
          </div>
        )}
      </Popup>
  )
}

export default Modal