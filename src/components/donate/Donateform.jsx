import React from 'react'
import './donateform.css'

const Donateform = () => {
  const Donated = () => {
    document.getElementById("form").reset();
    alert("Thank you for your generosity.");
  }
  return (
    <div className='full_donate_content'>
      <div className='donate_content'>
          <h1>Donate</h1>
          <p>If you want to play a part in caring for the</p>
          <p>animal&apos;s wellbeing without adopting, </p>
          <p>consider donating.</p>
      </div>
      <div className='form_container'>
        <form id='form' className='donate_form'>
          <input type="text" id="num" name="num" autocomplete="off" placeholder='Enter an amount' />
          <button className="submit_donate" type='button' onClick={Donated}>Next</button><br/>
        </form>
        <div>
          <label htmlFor="" className='form_label'>(Minimum 1 USD)</label>
        </div>
      </div>
    </div>
  )
}

export default Donateform