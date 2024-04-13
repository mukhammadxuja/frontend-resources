import { createContext, useContext, useState } from 'react';

const CardContext = createContext({});

export const useCardContext = () => {
  return useContext(CardContext);
};

export const CardContextProvider = ({ children }) => {
  const [cardTag, setCardTag] = useState('All');
  const [hashTag, setHashTag] = useState('');
  const [like, setLike] = useState(false);

  const colorVariants = {
    green: 'bg-green-100 hover:!bg-green-200/50 text-green-500',
    red: 'bg-rose-500 hover:!bg-rose-600 focus:!bg-rose-500  border !border-rose-500 focus:!text-white text-white hover:!text-white',
    yellow:
      'bg-amber-500 hover:!bg-amber-600 focus:!bg-amber-500 border !border-amber-500 focus:!text-white text-white hover:!text-white',
    gray: 'bg-slate-100 hover:!bg-slate-200/50 text-slate-500',
    orange:
      'bg-orange-500 hover:!bg-orange-600 focus:!bg-orange-500 border !border-orange-500 focus:!text-white text-white hover:!text-white',
    lime: 'bg-lime-500 hover:!bg-lime-600 focus:!bg-lime-500  border !border-lime-500 focus:!text-white text-white hover:!text-white',
    emerald:
      'bg-emerald-500 hover:!bg-emerald-600 focus:!bg-emerald-500 border !border-emerald-500 focus:!text-white text-white hover:!text-white',
    indigo:
      'bg-indigo-500 hover:!bg-indigo-600 focus:!bg-indigo-500 border !border-indigo-500 focus:!text-white text-white hover:!text-white',
    teal: 'bg-teal-500 hover:!bg-teal-600 focus:!bg-teal-500 border !border-teal-500 focus:!text-white text-white hover:!text-white',
    cyan: 'bg-cyan-500 hover:!bg-cyan-600 focus:!bg-cyan-500 border !border-cyan-500 focus:!text-white text-white hover:!text-white',
    sky: 'bg-sky-500 hover:!bg-sky-600 focus:!bg-sky-500 border !border-sky-500 focus:!text-white text-white hover:!text-white',
    blue: 'bg-blue-500 hover:!bg-blue-600 focus:!bg-blue-500 border !border-blue-500 focus:!text-white text-white hover:!text-white',
    violet:
      'bg-violet-500 hover:!bg-violet-600 focus:!bg-violet-500 border !border-violet-500 focus:!text-white text-white hover:!text-white',
    purple:
      'bg-purple-500 hover:!bg-purple-600 focus:!bg-purple-500 border !border-purple-500 focus:!text-white text-white hover:!text-white',
    fuchsia:
      'bg-fuchsia-500 hover:!bg-fuchsia-600 focus:!bg-fuchsia-500 border !border-fuchsia-500 focus:!text-white text-white hover:!text-white',
    pink: 'bg-pink-500 hover:!bg-pink-600 focus:!bg-pink-500 border !border-pink-500 focus:!text-white text-white hover:!text-white',
    rose: 'bg-rose-500 hover:!bg-rose-600 focus:!bg-rose-500 border !border-rose-500 focus:!text-white text-white hover:!text-white',
  };

  const contextValue = {
    cardTag,
    hashTag,
    like,
    setHashTag,
    setLike,
    setCardTag,
    colorVariants,
  };

  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  );
};
