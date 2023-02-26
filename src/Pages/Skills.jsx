import React, { useRef } from 'react'
import './Styling/Skills.css'
import css_logo from '../assets/Front-End/css_logo.png'
import html_logo from '../assets/Front-End/html_logo.png'
import react_logo from '../assets/Front-End/react_logo.png'
import express_logo from '../assets/Back-End/express_logo.png'
import node_logo from '../assets/Back-End/node_logo.png'
import git_logo from '../assets/Tools/git_logo.png'
import github_logo from '../assets/Tools/github_logo.png'
import npm_logo from '../assets/Tools/npm.png'
import postman_logo from '../assets/Tools/postman.png'
import vscode_logo from '../assets/Tools/vscode.png'
import websocket_logo from '../assets/Back-End/websocket_logo.png'
import Typescript_logo from '../assets/Front-End/Typescript_logo.png'
import mongodb_logo from '../assets/Back-End/mongodb_logo.png'
import tRPC_logo from '../assets/Back-End/tRPC_logo.svg'
import tailwind_logo from '../assets/Front-End/tailwind_logo.svg'
import useElementOnScreen from '../Hooks/useElementOnScreen'


function Skills() {

    const projectsRef = useRef(null);
    const projectsVisible = useElementOnScreen({
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }, projectsRef);


  return (
    <div className='skills__container'>
        <div className="section skills" ref={projectsRef}>
            <div className={`skills-wrapper ${projectsVisible ? 'show' : null}`}>
                <h1>Frontend</h1>
                <div className='skills-content'>
                    <div className="tech"><img src={react_logo} alt="react"/><span className='tooltip'>React JS</span></div>
                    <div className="tech"><img src={Typescript_logo} alt="react"/><span className='tooltip'>Typescript</span></div>
                    <div className="tech"><img src={html_logo} alt="react"/><span className='tooltip'>HTML</span></div>
                    <div className="tech"><img src={css_logo} alt="react"/><span className='tooltip'>CSS</span></div>
                    <div className="tech"><img src={tailwind_logo} alt="react"/><span className='tooltip'>Tailwind</span></div>
                </div>
            </div>
            <div className={`skills-wrapper ${projectsVisible ? 'show' : null}`}>
                <h1>Backend</h1>
                <div className='skills-content'>
                    <div className="tech"><img src={express_logo} alt="react"/><span className='tooltip'>Express JS</span></div>
                    <div className="tech"><img src={node_logo} alt="react"/><span className='tooltip'>Node JS</span></div>
                    <div className="tech"><img src={websocket_logo} alt="react"/><span className='tooltip'>Web Socket</span></div>
                    <div className="tech"><img src={tRPC_logo} alt="react"/><span className='tooltip'>tRPC</span></div>
                    <div className="tech"><img src={mongodb_logo} alt="react"/><span className='tooltip'>MongoDB</span></div>
                </div>
            </div>
            <div className={`skills-wrapper ${projectsVisible ? 'show' : null}`}>
                <h1>Tools</h1>
                <div className='skills-content'>
                    <div className="tech"><img src={git_logo} alt="react"/><span className='tooltip'>git</span></div>
                    <div className="tech"><img src={github_logo} alt="react"/><span className='tooltip'>GitHub</span></div>
                    <div className="tech"><img src={npm_logo} alt="react"/><span className='tooltip'>NPM</span></div>
                    <div className="tech"><img src={postman_logo} alt="react"/><span className='tooltip'>Postman</span></div>
                    <div className="tech"><img src={vscode_logo} alt="react"/><span className='tooltip'>VSCode</span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills