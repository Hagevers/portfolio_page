import React from 'react'
import '../Pages/Styling/TagButton.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function TagButton({text, link}) {

  return (
    <a href={link} target='_blank' className='tag__link'>
        <button className={`tag__button`}>
            <span>{text}</span>
            <div className='tag__button-arrow'><KeyboardArrowRightIcon sx={{color: '#fff'}}/></div>
        </button>
      </a>
  )
}

export default TagButton