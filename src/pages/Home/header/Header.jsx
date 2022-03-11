import React from 'react'
import Doge from '../../../assets/orangeDoge.png'
import './header.css'

const Header = () => {
  return (
    <div>
      <div className='container'>  
        <div className='header_fullbackground'>
            <div className='header_background'>
                <img src={Doge} alt="doge"/>
                <div class="header_text">
                    <p>Every pet deserves to live </p>
                    <p>out the rest of their lives,</p>
                    <p>being loved and cared for.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header;