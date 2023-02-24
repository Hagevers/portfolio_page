import './App.css'
import Projects from './Pages/Projects'
import LandingPage from './Pages/LandingPage'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
import Rights from './Components/Rights'
import Popup from './Components/Popup'
import React, { useState } from 'react'

function App() {

  const [popup, setPopup] = useState(false);
  const [name, setName] = useState('');

  return (
    <div className="App">
      <LandingPage />
      <Projects />
      <Skills />
      <Contact popupVisibility={setPopup} name={name} setName={setName}/>
      <Rights />
      <div className={`contact__popup ${popup ? 'show' : null}`}>
        <Popup popupVisibility={setPopup} name={name}/>
      </div>
    </div>
  )
}

export default App
