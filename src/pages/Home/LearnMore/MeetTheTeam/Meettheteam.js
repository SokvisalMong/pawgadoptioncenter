import React, {useEffect}from 'react'
import MeetTheTeam from './meetheteampage/Meettheteam'

const Meettheteam = () => {

useEffect(() => {
  document.title = "Meet The Team";  
}, []);

  return (
    <div>
      <MeetTheTeam />
    </div>
  )
}

export default Meettheteam