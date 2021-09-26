import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import './PlaceCard.css';

const PlaceCard = () => {
    const[places, setPlaces] = useState([]);
    useEffect(() => {
      fetch('./places.json')
      .then(res => res.json())
      .then(data => setPlaces(data))
    },[]);
    return (
        <div>
            <div className="info-container">
                <h2>total place</h2>
            
            </div>
            <div className="place-card">
                {
                    places.map(place => <Place place={place}></Place> )
                }
            </div>
        </div>
    );
};

export default PlaceCard;