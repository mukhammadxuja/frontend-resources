import React from 'react';
import Link from 'next/link';

function Jobs() {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <header className="container mx-auto mt-20 py-[48px]">
      <p className="text-sm font-normal text-gray-500">Coming soon</p>
      <h1 className="py-[24px] text-[2.25rem] font-bold leading-[2.5rem] tracking-[-.025em] text-[#0f172a]">
        We are working on it.
      </h1>
      <div className="flex flex-col items-center gap-2 md:flex-row">
        <button
          onClick={handleGoBack}
          className="btn_primary group relative flex items-center justify-center space-x-1.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>

          <span>Go back</span>
        </button>

        <Link href="/">
          <button className="btn_ghost flex items-center justify-center space-x-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <span>Take me home</span>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Jobs;
