import React from 'react'
import violinist from '../Images/violinist.jpg'
import musicians2 from '../Images/musicians2.jpg'
import classImage from '../Images/class.jpg'

const array = [
    {
        title: 'Learn',
        subtitle: 'Every day after school, our students are making music and learning life skills.',
        image: violinist,
    },
    {
        title: 'Teach',
        subtitle: "If you're passionate about using music to inspire students and families, we want to hear from you.",
        image: musicians2,
    },
    {
        title: 'Perform',
        subtitle: 'Our curriculum exposes students to fundamental skills and concepts in music theory, music appreciation, and performance. ',
        image: classImage,
    },
]

function CardsHome() {
    return (
        <div className="cards-home-container">
            {array.map(card => 
            <div className="card">
                <h2>{card.title}</h2>
                <img src={card.image}/>
                <p>{card.subtitle}</p>
            </div>)}
        </div>
    )
}

export default CardsHome
