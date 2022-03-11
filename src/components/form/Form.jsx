import React from 'react'
import './form.css'

const Form = () => {
  const Submit = () => {
    document.getElementById("form").reset();
    alert("The form was submitted successfully");
  }

  return (
    <div className='container69'>
      <form className='form' id="form">
        <input type="text" id="name" name="name" autocomplete="off" placeholder='Name' /><br/>
        <input type="text" id="email" name="email" autocomplete="off" placeholder='Email' /><br/>
        <textarea type="text" placeholder='Message' id="message"></textarea><br/>
        <button className="submit" type='button' onClick={Submit}>Submit</button>
      </form>
    </div>
  )
}

export default Form