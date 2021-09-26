import React from 'react';

const Place = (props) => {
    const {img, name, Location, Resort, buses, cost} = props.place;
    return (
        <div>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h4>Location: {Location} </h4>
            <h4>Resort: {Resort} </h4>
            <h5>Buses: {buses} </h5>
            <h4>Cost: {cost} </h4>
        </div>
    );
};

export default Place;