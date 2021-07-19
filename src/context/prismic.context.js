import { createContext, useState, useEffect } from 'react';
import { fetchData } from './prismic.utils';

import Spinner from '../components/spinner/spinner.component';

export const PrismicContext = createContext({});

const PrismicProvider = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const localStorage = window.localStorage;
    const localJsonData = localStorage.getItem('data');
    const localData = JSON.parse(localJsonData);

    if (localData) {
      setData(localData);
    } else {
      fetchData().then((response) => {
        if (response) {
          setData(response);
          localStorage.setItem('data', JSON.stringify(response));
        }
      });
    }
  }, []);

  // Provides Prismic CMS data to entire app
  return Object.keys(data).length ? (
    <PrismicContext.Provider value={data}>{children}</PrismicContext.Provider>
  ) : (
    <Spinner />
  );
};

export default PrismicProvider;
