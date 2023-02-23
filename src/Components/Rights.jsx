import React from 'react'
import '../Pages/Styling/Rights.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

function Rights() {
    const year = new Date().getFullYear();
    
    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

  return (
    <footer>
        <div className="to-top" onClick={toTop}><DoubleArrowIcon sx={{width: 65, height: 65, color: '#ed5b53', rotate: '-90deg'}}/></div>
        <div className="footer__icons">
            <a href='https://www.linkedin.com/in/amit-hadad-324a0822a/' target='_blank' className='icon'>
                <LinkedInIcon sx={{width: 65, height: 65, color: '#fa5353'}}/>
            </a>
            <a href='https://github.com/Hagevers/' target='_blank' className='icon'>
                <GitHubIcon sx={{width: 65, height: 65, color: '#fa5353'}}/>
            </a>
            <a href='#' target='_blank' className='icon'>
                <ArticleIcon sx={{width: 65, height: 65, color: '#fa5353'}}/>
            </a>
        </div>
        <div className='footer_rights'>
            <span>AMIT HADAD</span>
            <span className='rights'> ©{year}</span>
        </div>
    </footer>
  )
}

export default Rights