import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import fries from './fries.jpg'
import hotdog from './hotdog.jpg'
import './TinderCards.css'

function TinderCards() {
    const [people, setpeople] = useState([{
        name: "Elon Musk",
        url: fries
    },
    {
        name: "Jeff Bezos",
        url: hotdog
    },
])
const swiped=(direction, nameToDelete)=>{
    console.log("removing"+nameToDelete);
}

const outOfFrame = (name) =>{
    console.log(name +" left screen");
}
  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
            {people.map((character)=>(
                <TinderCard
                className='swipe'
                key={character.name}
                preventSwipe={["up", "down"]}
                onSwipe = {(dir)=>swiped(dir, character.name)}
                onCardLeftScreen = {()=>outOfFrame(character.name)}

                >
                    <div
                    style={{backgroundImage: "url(" +character.url+")" }}
                    className= "card"
                    >
                        <h3>{character.name}</h3>
                    </div>

                </TinderCard>
            ))
            }
        </div>
    </div>
  )
}

export default TinderCards