import React, { useState, useEffect } from 'react';

import Pin from '../components/Pin/Pin';

import axios from 'axios';

const Main = () => {
  const [Pins, setPins] = useState([]);

  useEffect(() => {
    let mounted = true;
    const getPins = async () => {
      try {
        let { data } = await axios.get(
          'https://api.npoint.io/d6c00f3a646e5ecef901'
        );

        setPins(data);
      } catch (error) {
        console.error(error);
      }
    };
    getPins();
    return () => {
      mounted = false;
    };
  }, []);

  const style = {
    display: 'flex',
    'flex-flow': 'wrap',
  };

  return (
    <div style={style}>
      {Pins.map((pin) => {
        if (!pin.title) {
          pin.title = 'Unnamed Kitty';
        }
        return (
          <Pin
            key={pin.id}
            image={pin.images.orig.url}
            name={pin.title}
            author={pin.pinner.full_name}
          />
        );
      })}
    </div>
  );
};

export default Main;
