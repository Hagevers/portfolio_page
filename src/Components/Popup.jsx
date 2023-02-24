import React from 'react'
import '../Pages/Styling/Popup.css'
import CloseIcon from '@mui/icons-material/Close';

function Popup({popupVisibility, name}) {
  return (
    <div className='popup__container'>
        <div className="close-btn" onClick={()=> popupVisibility(false)}>
            <CloseIcon />
        </div>
        <div className="popup__content">
            <h1>Thank you for contacting me <span className='popup-name'>{name}</span>!</h1>
            <p>
                Your message have been sent successfully!
            </p>
        </div>
    </div>
  )
}

export default Popup