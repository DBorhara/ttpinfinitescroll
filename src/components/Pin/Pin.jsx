import React from 'react';
import styles from './Pin.module.css';

function Pin(props) {
  return (
    <div className = {styles.border}>
      <div className={styles.container}>
        <img src={props.image} alt={props.alt} />
        <div className="text">
          <h1>name:{props.name}</h1>
          <h1>author:{props.author}</h1>
        </div>
      </div>
    </div>
  );
}

export default Pin;
