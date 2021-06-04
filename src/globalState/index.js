import React, { useState, createContext } from 'react';
import useToken from '../components/Hooks/useToken';

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
  let  {token, setToken}  = useToken();
  const updateToken = (token)=>{
    setToken({
      token
    })
  }
  return (
    <GlobalState.Provider value={{state, updateSearchValue, token, updateToken}}>
      { children }
    </GlobalState.Provider>
  );
};

export default GlobalState;