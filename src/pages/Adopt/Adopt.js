import React ,{ useEffect }from 'react'
import Adoptheader from './adoptheader/Adoptheader'
import Adoptcontent from './adoptcontent/Adoptcontent'

const Adopt = () => {

  useEffect(() => {
    document.title = "Adopt";  
  }, []);

  return (
    <div>
      <Adoptheader />
      <Adoptcontent />
    </div>
  )
}

export default Adopt