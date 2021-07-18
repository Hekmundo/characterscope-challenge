import { createContext, useState, useEffect } from 'react';
import { fetchData } from './prismic.utils';

import Spinner from '../components/spinner/spinner.component';

export const PrismicContext = createContext({});

const PrismicProvider = ({ children }) => {
  const [data, setData] = useState({});

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
    <Spinner />
  );
};

export default PrismicProvider;
