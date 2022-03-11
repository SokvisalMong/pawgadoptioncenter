import React from 'react'
import './welcome.css'

const Welcome = () => {
  return (
    <div className='main_welcome'>
      <div className='welcome'>
        <h3>Welcome to Pawg Adoption Centre</h3>
            <p>Acting as both a full-time veterinary clinic and a volunteer organisation, our main mission is to </p>
            <p>promote animal welfare in Cambodia, one city at a time. The revenue made through Veterinary </p>
            <p>work are one of the main sources of funding that we use to start significant projects that will not</p>
            <p>only push forward the goal of improving the situation of abandoned pets in Cambodia, but to also</p>
            <p>give back to the community as well.</p>
      </div>
      <div className='welcome2'>
            <p>By using our services, you are directly supporting PAWG in our mission to improve the </p>
            <p>lives of many the lives of many stray cats and dogs in Phnom Penh, and other areas of </p>
            <p>Cambodia where we have partnerships and nonprofit work to fund animal rescues and</p>
            <p>other well-established animal welfare organisations as well.</p>
      </div>
    </div>

  )
}

export default Welcome