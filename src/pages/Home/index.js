import React , { useEffect}  from 'react'
import LearnMoreButton from './LearnMore/LearnMoreButton/LearnMoreButton'
import Header from './header/Header'
import Welcome from './welcome/Welcome'

const Home = () => {

useEffect(() => {
    document.title = "Pawg Adoption Center";  
}, []);

    return (
        <div>
            <Header />
            <Welcome />
            <LearnMoreButton />
        </div>
    )
}

export default Home