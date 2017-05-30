import React from 'react';

export const Card = ({title="Card Title", message="Card Message", style={width: '200px'}, children}) => (
  <div className="card" style={style}>
    <div className="card-block">
      <h4 className="card-title">{title}</h4>
      <p className="card-text">{message}</p>
      { children }
    </div>
  </div>
)
