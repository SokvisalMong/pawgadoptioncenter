import React from 'react'
import './footer.css'
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/youtube.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'

function Footer() {
  return (
    <div className='main_footer'>
        <div className='social_media'>
            <div className='social_media_icon'>
                <a href='https://www.facebook.com/ParagonIU.edu.kh' target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /></a>
                <a href='https://www.youtube.com/channel/UCN2a6EP-3iOTNTLXufwvKrA' target="_blank" rel="noopener noreferrer"><img src={youtube} alt="youtube" /></a>
                <a href='https://www.linkedin.com/company/paragon' target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" /></a>
                <a href='https://www.twitter.com/paragonisc' target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a>
                <a href='https://www.instagram.com/paragoniu.edu.kh' target="_blank" rel="noopener noreferrer"><img src={instagram} alt="istagran" /></a>
            </div>
        </div>
        <div className='footer'>
            <div className='footer_open'>
                <h3>Opening Hours</h3>
                <p>Monday - Sunday</p>
                <p>8 AM - 12 PM</p>
                <p>2 PM - 6 PM</p>
                <p>&nbsp;</p>
            </div>
            <div className='footer_contact'>
                <h3>Contact Info</h3>
                <p>Building 4, Sangkat Boeung kak,</p>    
                <p>St 315, Phnom Penh</p>
                <p>023 996 111</p>
                <p>sc@paragoniu.edu.kh</p>
            </div>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62550.485316572456!2d104.87418866904292!3d11.522754207441523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109517bf7757d23%3A0x965c34888684bf1!2sParagon%20International%20University!5e0!3m2!1sen!2skh!4v1646641974519!5m2!1sen!2skh" 
                    className="map" 
                    title='map'
                    allowFullScreen="" 
                    loading="lazy">
                </iframe>
            </div>
        </div>
    </div>
  )
}

export default Footer