/* eslint-disable @next/next/no-img-element */
import { useTheme } from 'next-themes';
import React from 'react';

function Menu({ open, setOpen }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative w-full md:w-auto">
      <svg
        onClick={() => setOpen((prev) => !prev)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`ml-auto h-12 w-12 cursor-pointer rounded-lg p-2 duration-300 ${
          open && 'bg-background'
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9h16.5m-16.5 6.75h16.5"
        />
      </svg>
      <div
        className={`absolute left-1/2 z-[100] mt-8 w-full -translate-x-1/2 rounded-[10px] border border-border bg-background p-4 shadow-md md:left-auto md:right-0 md:w-[280px] md:translate-x-0 ${
          open
            ? 'visible translate-y-0 opacity-100 duration-200'
            : 'invisible translate-y-1.5 opacity-0 duration-200'
        }`}
      >
        <h5 className="pb-2 text-xs font-medium text-muted">APPEARANCE</h5>
        <div className="flex items-center gap-1.5 pb-3">
          <img
            onClick={() => setTheme('light')}
            className="h-[72px] cursor-pointer rounded-md duration-300 hover:scale-105"
            src="https://refero.design/static/media/theme-light@x2.85c8e00f94921db5ac28.png"
            alt="light"
          />
          <img
            onClick={() => setTheme('dark')}
            className="h-[72px] cursor-pointer rounded-md duration-300 hover:scale-105"
            src="https://refero.design/static/media/theme-dark@x2.c5f24e29a7461c398bf3.png"
            alt="dark"
          />
          <img
            onClick={() => setTheme('system')}
            className="h-[72px] cursor-pointer rounded-md duration-300 hover:scale-105"
            src="https://refero.design/static/media/theme-system@x2.0bfa48e19a5c5388a54e.png"
            alt="system"
          />
        </div>
        <div className="space-y-1.5 border-t border-border pt-3">
          <a
            className="btn btn_ghost flex w-full items-center gap-x-1.5"
            href=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>

            <span>Totally Free</span>
          </a>
          <a
            className="btn btn_ghost flex w-full items-center gap-x-1.5"
            href=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 text-yellow-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>

            <span>Give a Star</span>
          </a>
          <a
            className="btn btn_ghost flex w-full items-center gap-x-1.5"
            href=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>

            <span>Give Feedback</span>
          </a>

          <button className="btn btn_primary group flex w-full items-center justify-center gap-x-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 duration-300 group-hover:-rotate-45"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
            <span>Submit resource</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
