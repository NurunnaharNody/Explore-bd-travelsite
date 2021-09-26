import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import TotalCost from '../TotalCost/TotalCost';
import './PlaceCard.css';

const PlaceCard = () => {
    const[places, setPlaces] = useState([]);
    const [totalCost, setTotalCost] = useState([]);
    useEffect(() => {
      fetch('./places.json')
      .then(res => res.json())
      .then(data => setPlaces(data))
    },[]);
    const handleAddedTotal = (place) => {
         const newAddTotal = [...totalCost, place];
         setTotalCost(newAddTotal);

    }
    return (
        <div className="travel-place">
            <div className="place-card">
                {
                    places.map(place => <Place key={place.id} 
                        handleAddedTotal={handleAddedTotal} 
                        place={place}>
                           </Place>)
                }
            </div>
            <div className="total-cost">
                    <TotalCost totalCost={totalCost}> </TotalCost>
            </div>
        </div>
    );
};

export default PlaceCard;