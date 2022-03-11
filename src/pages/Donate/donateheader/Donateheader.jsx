import React from 'react'
import './donateheader.css'
import GreenDog from '../../../assets/greendog.jpg'

const Donateheader = () => {
  return (
    <div className='green_background'>
        <div className='green_dog'>
            <img src={GreenDog} alt="greendog" />
        </div>
    </div>
  )
}

export default Donateheader