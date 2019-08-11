import React from 'react';
import { Link } from "react-router-dom";

import './card.css';

export default props => {
  const { gnome, style } = props;

  return (
    <div className="card" style={style}>
      <div className="card-wrap">

        <div className="card-image-wrap">
          <img src={gnome.thumbnail} alt={gnome.name} />
        </div>

        <div className="card-info">
          <h2>{gnome.name}</h2>
          <p>{gnome.age} years old</p>
          <p>{gnome.weight.toFixed(1)}kg</p>
          <Link to={{
            pathname: `/gnome/${gnome.id}`,
            gnome,
          }}>Details</Link>
        </div>
        
      </div>
    </div>
  );

}
