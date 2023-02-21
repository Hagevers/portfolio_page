import React from 'react'
import '../Pages/Styling/TagButton.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function TagButton({text}) {

  return (
        <button className={`tag__button`}>
            <span>{text}</span>
            <div className='tag__button-arrow'><KeyboardArrowRightIcon sx={{color: '#fff'}}/></div>
        </button>
  )
}

export default TagButton