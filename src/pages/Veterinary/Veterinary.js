import React ,{ useEffect} from 'react'
import VetHeader from './VetHeader/Vetheader'

const Veterinary = () => {

useEffect(() => {
  document.title = "Veterinary";  
}, []);

  return (
    <div>
      <VetHeader />
    </div>
  )
}

export default Veterinary