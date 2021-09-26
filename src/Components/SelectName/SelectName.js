import React from 'react';
import './SelectName.css'

const SelectName = (props) => {
      const{img, name} = props.selectName;
    return (
        <div className="select-name">
              <img src={img} alt="" />
              <h3>{name}</h3>
        </div>
    );
};

export default SelectName;