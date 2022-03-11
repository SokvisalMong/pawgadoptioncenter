import React , {useEffect}from 'react'
import Donateform from '../../components/donate/Donateform'
import Donateheader from './donateheader/Donateheader'

const Donate = () => {

  useEffect(() => {
    document.title = "Donate";  
  }, []);

  return (
    <div>
      <Donateheader />
      <Donateform />
    </div>
  )
}

export default Donate