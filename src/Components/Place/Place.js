import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import './Place.css'


const Place = (props) => {
    const {img, name, Location, Resort, buses, cost} = props.place;
    const element = <FontAwesomeIcon icon={faMapMarkerAlt} />
    return (
        <div className="place-style">
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h4>Location: {Location} </h4>
            <h4>Resort: {Resort} </h4>
            <h4>Buses: {buses} </h4>
            <h4 className="cost">Cost: {cost} </h4>
            <button onClick={() => props.handleAddedTotal(props.place)} className="add-button">{element}Add place</button>
        </div>
    );
};

export default Place;