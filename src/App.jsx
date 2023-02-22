import './App.css'
import Projects from './Pages/Projects'
import LandingPage from './Pages/LandingPage'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
import Rights from './Components/Rights'

function App() {

  return (
    <div className="App">
      <LandingPage />
      <Projects />
      <Skills />
      <Contact />
      <Rights />
    </div>
  )
}

export default App
