import React from 'react'
import RedPinkDog from '../../../assets/redpinkdog.jpg'
import Vaccine from '../../../assets/vaccine.png'
import Neutered from '../../../assets/neutered.png'
import Gun from '../../../assets/gun.png'
import Surgery from '../../../assets/surgery.png'
import './vetheader.css'

const Header = () => {
  return (
    <div className='vet_header'>
      <div className='header_dog'>
        <img src={RedPinkDog} alt="redpinkdog" />
      </div>
      <div className='about_clinic'>
        <h3>About Our Clinic</h3>
        <p>PAWG Veterinary Clinic is operated directly from our HQ where surgery and </p>
        <p>consultation space are provided.</p>
        <br />
        <p>We are staffed with a generous amount of full-time veterinarians, all of which are </p>
        <p>fully trained with years of experience behind their portfolio. Not to mention, our </p>
        <p>volunteers are also involved when it comes to caring and calming your pets during </p>
        <p>your visit. We aim to keep our clients and their pets satisfied by offering the most </p>
        <p>affordable medical care to them, all while keeping up-to-date with the latest medical</p>
        <p>technology and practices</p>
        <h3>What Our Clinic Provides</h3>
      </div>
      <div className='vector_img'>
        <div className='vaccine'>
          <img src={Vaccine} alt="vaccine" />
          <h4>Vaccination</h4>
          <p>Rabies, DHPPil,</p>
          <p>HC/P injections.</p>
          <p>&nbsp;</p>
        </div>
        <div className='general_healthcare'>
          <img src={Surgery} alt="doghurt" />
          <h4>General Healthcare</h4>
          <p>Wound stitching, Dentistry,</p>
          <p>Bone fracture treatment,</p>
          <p>De-worming,etc.</p>
        </div>
        <div className='neutering'>
          <img src={Neutered} alt="neutering" />
          <h4>Spay/Neutering</h4>
          <p>Ovariohysterectomy, </p>
          <p>Orchiectomy options for</p>
          <p>both sexes.</p>
        </div>
        <div className='gun'>
          <img src={Gun} alt="gun" />
          <h4>Euthanization</h4>
          <p>Ethical end of life care for aged,</p>
          <p>sick,and badly injured pets who </p>
          <p>has little to no quality of life.</p>
        </div>
      </div>
      <div className='booking_vet'>
          <a href="https://form.jotform.com/220684156792059" target="_blank" rel="noopener noreferrer" class="booking_vet_button">Book An Appointment Now</a>
      </div>
    </div>
  )
}

export default Header