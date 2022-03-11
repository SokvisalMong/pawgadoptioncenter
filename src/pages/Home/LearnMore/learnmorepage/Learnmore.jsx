import React from 'react'
import './learnmore.css'
import PinkCatDog from '../../../../assets/pinkcatdog.jpg'
import Learnmore1 from '../../../../assets/learnmore4.png'
import Learnmore2 from '../../../../assets/learnmore3.png'
import Learnmore3 from '../../../../assets/learnmore2.png'
import Learnmore4 from '../../../../assets/learnmore1.png'

const Learnmore = () => {
  return (
<div>
  <div className='pinkcatdog_background'>
    <div className='pinkcatdog'>
      <img src={PinkCatDog} alt="pink cat dog" />
    </div>
  </div>
  <div className='learnmore_whatwedo'>
    <h3>What We Do</h3>
    <p>Acting as both a full-time veterinary clinic and a volunteer organisation, our main mission is to </p>
    <p>promote animal welfare in Cambodia, one city at a time. The revenue made through Veterinary </p>
    <p>work are one of the main sources of funding that we use to start significant projects that will not</p>
    <p>only push forward the goal of improving the situation of abandoned pets in Cambodia, but to also</p>
    <p>give back to the community as well.</p>
    <h3>What We Offer</h3>
  </div>
  <div className='learnmore_full'>
    <div className='learnmore_row1'>
      <div className='row1_img'>
        <img src={Learnmore1} alt="lm1" />
        <h4>Veterinary Services</h4>
      </div>
      <div className='row1_text'>
        <p>We are equipped with fully trained veterinarians that can help tend</p>
        <p>to your pet's troubles and needs. Our HQ are equipped with the latest</p>
        <p>medical technology to assist us in every operation.</p>
      </div>
    </div>
    <div className='learnmore_row2'>
      <div className='row2_img'>
        <img src={Learnmore2} alt="lm2" />
        <h4>Animal Welfare Guidance</h4>
      </div>
      <div className='row2_text'>
          <p>We take the 5 animal welfare Acts very seriously. Meaning, for every animal</p>
          <p>we rescue, we will place full priority on nursing it back to full health,</p>
          <p>rehabilitating them into behaving naturally for their species(run,jump,etc),</p>
          <p>and provide therapy if needed in order for them to be ready for adoption </p>
          <p>when the time is right.</p>
      </div>
    </div>
    <div className='learnmore_row3'>
      <div className='row3_img'>
        <img src={Learnmore3} alt="lm3" />
        <h4>Finding New Homes for Animals</h4>
      </div>
      <div className='row3_text'>
        <p>As an organisation focused on spreading animal welfare, we are always on the move </p>
        <p>when it comes to handling animal rescues. In order to keep doing what we do, we</p>
        <p>need to make space for newer animals by offering the ones that we nursed up back</p>
        <p>to shape, up for adoption. Of course, we will see for ourselves if the owner is </p>
        <p>suitable for caring for our furry friends first before making a final decision.</p>
      </div>
    </div>
    <div className='learnmore_row4'>
      <div className='row4_img'>
        <img src={Learnmore4} alt="lm4" />
        <h4>Pet Supply Shop</h4>
      </div>
      <div className='row4_text'>
        <p>Functioning as a veterinary clinic, we also offer pet supplies(toys, wet food, dry food,etc.)</p>
        <p>up for sale so that people that either come to have their pets checked or to find a furry</p>
        <p>friend of their own can shop for proper items that can assist them in taking care of their pet's</p>
        <p>wellbeing.</p>
      </div>
    </div>
    <div className='meet_the_team_button'>
      <a href="/meettheteampage" class="meet_the_team_buttonbutton">Meet The Team</a>
    </div>
  </div>
</div>
  )
}

export default Learnmore