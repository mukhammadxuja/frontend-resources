import { useMainContext } from 'context/MainContext';
import React from 'react';

function Dialog({ children }) {
  const { openDialog, setOpenDialog } = useMainContext();
  return (
    <div
      className={`fixed top-0 left-0 z-[100] h-screen w-full ${
        openDialog ? 'block' : 'hidden'
      }`}
    >
      <div className="absolute z-[101] h-full w-full bg-black bg-opacity-50 backdrop-blur" />

      <div
        className={`absolute top-1/2 left-1/2 z-[102] h-fit w-[30rem] -translate-y-1/2 -translate-x-1/2 rounded-lg bg-white p-4 duration-300 ${
          openDialog ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'
        }`}
      >
        <svg
          onClick={() => setOpenDialog(false)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute top-3 right-3 h-5 w-5 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
        Privet
      </div>
      {children}
    </div>
  );
}

export default Dialog;
