import { createContext, useContext, useState } from 'react';

const CardContext = createContext({});

export const useCardContext = () => {
  return useContext(CardContext);
};

export const CardContextProvider = ({ children }) => {
  const [cardTag, setCardTag] = useState('Tools');
  const [hashTag, setHashTag] = useState('');

  const contextValue = {
    cardTag,
    hashTag,
    setHashTag,
    setCardTag,
  };

  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  );
};
