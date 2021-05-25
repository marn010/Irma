import React, { useState, createContext } from 'react';

const GlobalState = createContext({});

const stateObj = {
  searchValue: ""
};

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(stateObj);
  const updateSearchValue = (searchValue) =>{
   setState({
      searchValue
   })
  };

  return (
    <GlobalState.Provider value={{state, updateSearchValue}}>
      { children }
    </GlobalState.Provider>
  );
};

export default GlobalState;