import React from 'react'

import Mission from './Mission'
import CardsHome from './CardsHome'

function Home() {
    return (
        <div className="home-container">
            <div className="landing-page">
                <p>Championing positive change through music</p>
            </div>
            <CardsHome />
            <Mission />
        </div>
    )
}

export default Home
