import React ,{ useEffect} from 'react'
import Learnmore from './learnmorepage/Learnmore'

const Learnmorepage = () => {

useEffect(() => {
    document.title = "Learn More";  
}, []);  

  return (
    <div>
        <Learnmore />
    </div>
  )
}

export default Learnmorepage