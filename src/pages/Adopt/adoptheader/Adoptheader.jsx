import React from 'react'
import './adoptheader.css'
import YellowDog from '../../../assets/yellowdog.jpg'

const Adoptcontent = () => {
  return (
    <div className='adopt_header_background'>
        <div className='blue_dog_header'>
            <img src={YellowDog} alt="bluedog" />
        </div>
    </div>
  )
}

export default Adoptcontent