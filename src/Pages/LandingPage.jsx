import React, { useRef } from 'react'
import Navbar from '../Components/Navbar'
import './Styling/LandingPage.css'
import Typewriter from "typewriter-effect"
import useElementOnScreen from '../Hooks/useElementOnScreen'

function LandingPage() {

  const resume = [
    {
      job: 'Army', 
      roles: [
          'special forces',
        'special forces',
        'special forces'
    ]},
    {
      job: 'Army', 
      roles: [
        'special forces', 'special forces', 'special forces'
    ]}
  ]

  const aboutRef = useRef(null);
  const aboutVisible = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  }, aboutRef);

  return (
    <div className='lp__container' id='About' ref={aboutRef}>
        <Navbar />
        <div className='lp__wrapper'>
          <div className={`lp__flex-left ${aboutVisible ? 'show' : null}`}>
            <div className='lp__title'>
              <span>Hi.</span>
              <h1 className='lp__title-flex'>
                <span>I'm </span>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    cursor: '<span class="test">|</span>',
                    strings:[
                      '<span class="test">Amit</span>',
                      '<span class="test">A Fullstack-Dev</span>',
                      '<span class="test">A person</span>'
                    ]
                  }}
                />
              </h1>
            </div>
            <div className='lp__content'>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate illo similique reiciendis reprehenderit! Similique provident corporis obcaecati illo
              </p>
            </div>
            <div className="lp__footer">
              <span className='lp__footer-title'>A SELF TOUGHT FULL-STACK DEV</span>
              <span className='lp__footer-content'>Currently employed at Malam-Team</span>
            </div>
          </div>
          <div className={`lp__flex-middle ${aboutVisible ? 'show' : null}`}>
            <div className='middle-img' >
              <img src="https://uploads-ssl.webflow.com/63f34c726a46b0443388019c/63f34c8fe65caf310a5b41d2_tyko.png" loading="lazy" sizes="(max-width: 1024px) 100vw, 1024px" srcset="https://uploads-ssl.webflow.com/63f34c726a46b0443388019c/63f34c8fe65caf310a5b41d2_tyko-p-500.png 500w, https://uploads-ssl.webflow.com/63f34c726a46b0443388019c/63f34c8fe65caf310a5b41d2_tyko-p-800.png 800w" alt="" />
            </div>
          </div>
          {/* <div className="lp__flex-right hidden">
            <div className='lp__flex-right__resume'>
              {resume.map((job)=> {
                return(
              <div className='period'>
                <div className="title">
                  {job.job}
                </div>
                <div className="roles">
                  {job.roles.map((role) => {
                    return(
                      <div className='role'>
                        <span className='role-title'>{role}</span>
                      </div>
                    )})}
                </div>
              </div>
              )})}
            </div>
          </div> */}
        </div>
    </div>
  )
}

export default LandingPage