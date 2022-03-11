import React from 'react'
import './adoptcontent.css'
import AdoptMe from '../../../assets/adoptme.png'

const Adoptcontent = () => {
  return (
    <div>
        <div className='adopt_content'>
            <h3>Adopt an Animal</h3>
            <p>We want to see the animals that we rescued be given a second chance by providing them a warm home to go to, </p>
            <p>greeted and cared for by fur-loving owners that can attend to their needs, teaching them how to live out their days</p>
            <p>without fear of being mistreated or abused ever again.</p>
        </div>
        <div className='adopt_me_dog'>
            <img src={AdoptMe} alt="adoptmedog" />
        </div>
        <div className='adopt_content'>
          <p>If you're interested in getting a fur buddy of your own, you can start by clicking the button below to apply.</p>
          <p>Do consider that adoption costs will vary depending on the condition of the animal you chose.</p>
        </div>
        <div className='apply_for_adoption'>
            <a href="https://form.jotform.com/220683704884059" target="_blank" rel="noopener noreferrer" class="apply_for_adoption_button">Apply For Adoption</a>
        </div>
    </div>
  )
}

export default Adoptcontent