import { useState, useEffect } from 'react';

const useInfiniteScroll = (cb) => {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    if (!isFetching) return;
    cb(() => {
      console.log('THIS WORKS EUREKA');
    });
  }, [isFetching, cb]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
