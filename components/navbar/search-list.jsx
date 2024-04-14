import React from 'react';

function SearchList({ title, tag, menu, setMenu, children }) {
  return (
    <li
      onClick={() => setMenu(tag)}
      className={`flex w-full cursor-pointer items-center justify-between rounded-lg border border-transparent px-3 py-2 duration-300 hover:bg-foreground hover:opacity-80 ${
        menu === tag && 'border-border bg-foreground'
      }`}
    >
      <div className="flex items-center gap-x-1.5 text-muted">
        {children}

        <span className="text-lg">{title}</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6 text-muted"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </li>
  );
}

export default SearchList;
