import React, { useRef } from 'react'
import './Styling/Projects.css'
import portfolio_img from '../assets/portfolio_updated.png'
import aiceberg_img from '../assets/aiceberg_site.png'
import fightclub_img from '../assets/fightclub_site.png'
import TagButton from '../Components/TagButton'
import useElementOnScreen from '../Hooks/useElementOnScreen'

function Projects() {

  const projects = [
    {title: 'Portfolio', desc: 'My personal portfolio website, contains my resume and project I have built with react, express and etc...', img: portfolio_img, tags: [{text: 'GitHub', link: 'https://github.com/Hagevers/portfolio_page'}]},
    {title: 'AIceberg', desc: 'A customer service application, gathering all messages from different platforms such as facebook, whatsapp, instagram, telegram to one place. integrating with CRM services', img: aiceberg_img, tags: [{text: 'Live Demo', link: 'https://aiceberg-app.netlify.app'}]},
    {title: 'Fight Club', desc: 'Turn based game, build the strongest army and compete against others by gathering resources and raiding!', img: fightclub_img, tags: [{text: 'Live Demo', link: 'https://fight-clubs.netlify.app/'}, {text: 'GitHub', link: 'https://github.com/stars/Hagevers/lists/fightclub'}]},
    {title: 'Portfolio', desc: 'My personal portfolio website, contains my resume and project I have built with react, express and etc...', img: portfolio_img, tags: [{text: 'GitHub', link: 'https://github.com/Hagevers/portfolio_page'}], finished: false}
  ]

  const projectsRef = useRef(null);
  const projectsVisible = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1
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
                        <TagButton text={button.text} key={index} link={button.link} />
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