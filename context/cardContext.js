import { createContext, useContext, useState } from 'react';

const CardContext = createContext({});

export const useCardContext = () => {
  return useContext(CardContext);
};

export const CardContextProvider = ({ children }) => {
  const [cardTag, setCardTag] = useState('Recommended');
  const [hashTag, setHashTag] = useState('');
  const [like, setLike] = useState(false);

  const contextValue = {
    cardTag,
    hashTag,
    like,
    setHashTag,
    setLike,
    setCardTag,
  };

  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  );
};
