import React from 'react'
import './getinvolvedcontent.css'
import Pug from '../../../assets/pug.png'

const Getinvolvedcontent = () => {
  return (
    <div className='get_involved_content'>
        <div className='GI_content1'>
          <h3>Volunteering at Pawg</h3>
          <p>As an organisation dedicated towards promoting animal welfare, we are always assigned to animal rescue</p>
          <p>operations year-round. Having volunteers help out in managing some portion of our overall workload means </p>
          <p>we are able to dedicate more time towards rescuing more animals from meat trades, abusive households,etc.</p>
        </div>
        <div className='GI_img'>
          <img src={Pug} alt="pug" />
        </div>
        <div className='GI_content2'>
          <p>If you're interested in caring for the animals we rescued, and is passionate about </p>
          <p>them finding a loving home, consider applying by sending us a message through </p>
          <p>the form below. Do keep in mind that you have to come volunteer 3-4 days</p>
          <p>minimum per week as you need to undergo training for proper animal care.</p>
          <h3>Get in touch</h3>
        </div>
    </div>
  )
}

export default Getinvolvedcontent