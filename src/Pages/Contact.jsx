import React, { useEffect, useRef } from 'react'
import './Styling/Contact.css'
import useElementOnScreen from '../Hooks/useElementOnScreen'

function Contact() {

    const ContactRef = useRef(null);
    const contactVisible = useElementOnScreen({
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }, ContactRef);

  return (
    <div className='contact__container' id='Contact'>
        <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
          <path d="M0 0 L50 100 L100 0 Z" fill="#261f26" stroke="#261f26"></path>
        </svg>
        <div className="contact__content">
            <h1 className="contact__title">Contact</h1>
            <span className='contact__title-sub'>Have a job offer? Want to leave a message? dont by shy!</span>
            <form className='contact__form'>
                <input type="email" name="" id="" placeholder='Name' />
                <input type="email" name="" id="" placeholder='Email' />
                <textarea placeholder='Your message'/>
                <input type="submit" name="" id="" />
            </form>
        </div>
    </div>
  )
}

export default Contact