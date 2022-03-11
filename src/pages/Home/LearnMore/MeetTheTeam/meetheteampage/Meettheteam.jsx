import React from 'react'
import Dogpic from '../../../../../assets/pit.png'
import './meettheteam.css'
import img1 from '../../../../../assets/sivtheng.jpg'
import img2 from '../../../../../assets/thy.png'
import img3 from '../../../../../assets/pich.jpg'
import img4 from '../../../../../assets/rat.png'

const Meettheteam = () => {
  return (
  <div>
      <div className="headerpic">
        <img src={Dogpic}/>
      </div>
      <div className="teamHeader">
        <h1>Meet The Team</h1>
      </div>
    <div className='profiles'>
      <div class="card">
        <img src={img1} alt="Avatar" />
        <div class="containercard">
          <h4>Sivtheng Chang</h4>
          <p>&nbsp;</p>
          <p>"Kim Hyunjin barks Jeon Heejin aww"</p>
          <p>- Park Gowon</p>
          <p>&nbsp;</p>
        </div>
      </div>
      <div class="card">
        <img src={img2} alt="Avatar" />
        <div class="containercard">
          <h4>Rithy Phal</h4>
          <p>&nbsp;</p>
          <p>"I do not think anyone should adopt chihuahuas."</p>
          <p>- Rithy Phal</p>
        </div>
      </div>
      <div class="card">
        <img src={img3} alt="Avatar" />
        <div class="containercard">
          <h4>Keoprospich Men</h4>
          <p>&nbsp;</p>
          <p>"Okay"</p>
          <p>- Keoprospich Men</p>
          <p>&nbsp;</p>
        </div>
      </div>
      <div class="card">
        <img src={img4} alt="Avatar" />
        <div class="containercard">
          <h4>Sokvisal Mong</h4>
          <p>&nbsp;</p>
          <p>"Professionally unprofessional"</p>
          <p>- Sokvisal Mong</p>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Meettheteam

