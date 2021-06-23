import React from 'react';

function Pin(props) {
  return (
    <div>
      <img src={props.image} alt={props.alt} />
      <div className="text">
        <h1>{props.name}</h1>
        <h1>{props.author}</h1>
      </div>
    </div>
  );
}

export default Pin