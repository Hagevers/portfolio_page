import React, { useState, useRef } from 'react'
import './Styling/Contact.css'
import useElementOnScreen from '../Hooks/useElementOnScreen'

function Contact({popupVisibility, setName, name}) {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showLoading, setShowLoading] = useState(false);
    const ContactRef = useRef(null);
    const contactVisible = useElementOnScreen({
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }, ContactRef);


    const handleContactSubmitForm = (e) => {
      e.preventDefault();
      if(!name){
        setErrorMessage('Please enter your name');
        return;
      }
      if(!email){
        setErrorMessage('Please enter your email');
        return;
      }
      if(!message){
        setErrorMessage('Please enter your message');
        return
      }
      setShowLoading(true);
      setErrorMessage('');
      setTimeout(() => {
        popupVisibility(true);
        setShowLoading(false);
        setEmail('');
        setMessage('');
      }, 1000)
    }

  return (
    <div className='contact__container' id='Contact'>
      <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
        <path d="M0 0 L50 100 L100 0 Z" fill="#261f26" stroke="#261f26"></path>
      </svg>
      <div className="contact__content">
          <h1 className="contact__title">Contact</h1>
          <span className='contact__title-sub'>Have a job offer? Want to leave a message? dont by shy!</span>
          <form className='contact__form' onSubmit={handleContactSubmitForm}>
              <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
              <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
              <textarea placeholder='Your message' value={message} onChange={(e)=>setMessage(e.target.value)} />
              <span>{errorMessage}</span>
              <button className={`submit-btn ${showLoading ? 'submit-contact' : null}`}>
                {!showLoading ? <span>Submit</span>:null}
              </button>
          </form>
      </div>
    </div>
  )
}

export default Contact