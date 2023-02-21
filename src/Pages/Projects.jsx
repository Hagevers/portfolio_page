import React, { useRef } from 'react'
import './Styling/Projects.css'
import portfolio_img from '../assets/portfolio_updated.png'
import aiceberg_img from '../assets/aiceberg_site.png'
import fightclub_img from '../assets/fightclub_site.png'
import TagButton from '../Components/TagButton'
import useElementOnScreen from '../Hooks/useElementOnScreen'

function Projects() {

  const projects = [
    {title: 'Portfolio', desc: 'My personal portfolio website, contains my resume and project I have built with react, express and etc...', img: portfolio_img, tags: ['Live Demo', 'GitHub']},
    {title: 'AIceberg', desc: 'My personal portfolio website, contains my resume and project I have built with react, express and etc...', img: aiceberg_img, tags: ['Live Demo', 'GitHub']},
    {title: 'Fight Club', desc: 'My personal portfolio website, contains my resume and project I have built with react, express and etc...', img: fightclub_img, tags: ['Live Demo', 'GitHub']},
    {title: 'Portfolio', desc: 'My personal portfolio website, contains my resume and project I have built with react, express and etc...', img: portfolio_img, tags: ['Live Demo', 'GitHub'], finished: false}
  ]

  const projectsRef = useRef(null);
  const projectsVisible = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  }, projectsRef);

  return (
    <div className='projects__container' id='Projects' ref={projectsRef}>
        <div className={`projects__header ${projectsVisible ? 'show' : null}`}>
          <div className="projects__header-small">{projects.length} last projects</div>
          <div className="projects__header-title">Projects</div>
        </div>
        <div className="projects__content">
          <div className={`projects__contents-items`}>
            {projects.map((project, index)=> {
              const delayFactor = 200;
              const transitionDelay = `${(index + 1) * delayFactor}ms`;
              return(
                <div
                    className={`box ${projectsVisible ? 'show' : null}`}
                    key={index}
                    style={{ transitionDelay }}
                    onTransitionEnd={(event) => {if (event.propertyName === 'opacity') event.target.style.transitionDelay = '0ms'}}
                  >
                  <div className="box-header">
                    <img src={project.img} alt={project.title} />
                  </div>
                  <div className="box-content">
                    <span>{project.title}</span>
                    <p>{project.desc}</p>
                  </div>
                  <div className="box-footer">
                    {project.tags.map((button, index)=>{
                      return (
                        <TagButton text={button} key={index} />
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
    </div>
  )
}

export default Projects