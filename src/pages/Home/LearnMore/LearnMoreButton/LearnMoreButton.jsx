import React from 'react'
import './learnmorebutton.css'
import { BrowserRouter as Router, Switch, Route, useRouteMatch, Link} from 'react-router-dom'
import Learnmorepage from '../Learnmorepage'

const LearnMoreButton = () => {
  let {path, url} = useRouteMatch();
  
  return (
    <div className='learn_button'>
      <a href="/learnmorepage" class="learnmore_button">Learn More</a>
    </div>
  )
}

export default LearnMoreButton