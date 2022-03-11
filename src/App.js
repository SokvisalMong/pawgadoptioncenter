import React from 'react'
import { Navbar, Footer , Scrolltotop} from './components'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home/'
import Veterinary from './pages/Veterinary/Veterinary'
import Adopt from './pages/Adopt/Adopt'
import GetInvolved from './pages/GetInvolved/Getinvolved'
import Shop from './pages/Shop/Shop'
import Donate from './pages/Donate/Donate'
import Learnmorepage from './pages/Home/LearnMore/Learnmorepage'
import Meettheteampage from './pages/Home/LearnMore/MeetTheTeam/Meettheteam'

const App = () => {

  return (
    <div className='App'>
      <div>
        <Router>
          <Navbar />
          <Scrolltotop/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/veterinary' component={Veterinary} />
            <Route path='/Adopt' component={Adopt} />
            <Route path='/Get-involved' component={GetInvolved} />
            <Route path='/shop' component={Shop} />
            <Route path='/Donate' component={Donate} />
            <Route path='/learnmorepage' component={Learnmorepage}/>
            <Route path='/Meettheteampage' component={Meettheteampage}/>
          </Switch>
          <Footer />
        </Router>
      </div>
      
    </div>
  )
}

export default App