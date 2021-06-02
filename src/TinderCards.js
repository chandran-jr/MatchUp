import React, { useEffect, useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from './axios.js';

function TinderCards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const req = await axios.get('/tinder/card');

            setPeople(req.data);
        }

        fetchData();
    }, [])

    const [lastDirection, setLastDirection] = useState();

    const swiped = (direction,nameToDelete) => {
        setLastDirection(direction);
    }

    const outOfFrame = (nameToDelete) => {
    }

    return (
        <div className="tindercards">
            <div className="tindercards__cards">
            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >

                        <div 
                            style={{ backgroundImage: `url(${person.imgUrl})`}}
                            className="tindercards__card">

                            <h3>{person.name}</h3>

                            </div>

                    </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
