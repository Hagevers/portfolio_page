import React from 'react'
import '../Pages/Styling/Navbar.css'

function Navbar() {

  return (
    <div className='navbar__container'>
        <div className='navbar__wrapper'>
            <span className='navbar__title'><a href="#Home">A/H</a></span>
            <nav>
                <ul className='navbar__content'>
                    <li><a href='#About'>ABOUT</a></li>
                    <li><a href='#Projects'>PROJECTS</a></li>
                    <li><a href='#Contact'>CONTACT</a></li>
                    <li><a target="_blank" href='https://github.com/Hagevers/'>GITHUB</a></li>
                    <li><a target="_blank" href='https://www.linkedin.com/in/amit-hadad-324a0822a/'>LINKEDIN</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar