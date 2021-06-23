//Dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import Pin from '../components/Pin/Pin';

//Hooks
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const Main = () => {
  const [Pins, setPins] = useState([]);

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      setPins((prevState) => [...prevState, ...Pins]);
      setIsFetching(false);
    }, 2000);
  }

  useEffect(() => {
    const getPins = async () => {
      try {
        let { data } = await axios.get('../data.json');
        let moddedData = [];
        let i = 0;
        while (i <= data.length) {
          moddedData.push(data.splice(0, 12));
          i++;
        }
        setPins(moddedData);
      } catch (error) {
        console.error(error);
      }
    };
    getPins();
    return () => {};
  }, []);

  const style = {
    display: 'flex',
    flexFlow: 'wrap',
  };

  return (
    <div style={style}>
      {Pins.map((pinArr) => {
        return pinArr.map((pin, i) => {
          return (
            <Pin
              key={pin.id}
              image={
                pin.images.orig.url ||
                'https://memegenerator.net/img/instances/400x/42139265.jpg'
              }
              name={pin.title || 'Unnamed Meowsterpiece'}
              author={pin.pinner.full_name || 'Meowstery Author'}
              description={
                pin.description || "It's a cat. What else do you want?"
              }
            />
          );
        });
      })}
      <div style={{ margin: 'auto' }}>
        {isFetching && 'Fetching more kittens...'}
      </div>
    </div>
  );
};

export default Main;
