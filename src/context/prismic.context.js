import { createContext, useState, useEffect } from 'react';
import { fetchData } from './prismic.utils';

export const PrismicContext = createContext({});

const PrismicProvider = ({ children }) => {
  const [data, setData] = useState({});
  console.log(data);

  useEffect(() => {
    fetchData().then((response) => {
      if (response) {
        setData(response);
      }
    });
  }, []);

  return Object.keys(data).length ? (
    <PrismicContext.Provider value={data}>{children}</PrismicContext.Provider>
  ) : (
    <div></div>
  );
};

export default PrismicProvider;
