import React from 'react';
import SelectName from '../SelectName/SelectName';
import './TotalCost.css'

const TotalCost = (props) => {
    const {totalCost} = props;
    let total = 0;
    for(const place of totalCost){
        total = total+place.cost;  
    }
    
    return (
        <div className="total-cost">
             <h2> Selected Place:{props.totalCost.length} </h2>
             <h1>Total Cost: {total} </h1>
             <button className="confirm-button">Confirm Destination</button>
             {
                totalCost.map(selectName => <SelectName selectName={selectName}></SelectName> )
            }
        </div>
    );
};

export default TotalCost;