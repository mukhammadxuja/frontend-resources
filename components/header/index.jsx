import { useMainContext } from 'context/MainContext';
import Link from 'next/link';

const Header = () => {
  const { openDialog, setOpenDialog } = useMainContext();
  // bg-[url('https://assets-global.website-files.com/5ce10a4c0b5f0b05f522e746/61f9aaf3889ff64e10afad3e_bg-blur-colors-top-light.jpg')]
  return (
    <header className="bg-[url('https://assets-global.website-files.com/5ce10a4c0b5f0b05f522e746/61f9aaf3889ff64e10afad3e_bg-blur-colors-top-light.jpg')] dark:bg-foreground dark:bg-[url('')]">
      <div className="container mx-auto pb-[48px] !pt-[calc(5rem_+_48px)]">
        <div className="flex items-center space-x-3">
          <p className="text-sm font-normal text-muted">288 resource</p>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="w-0.5 fill-current text-muted"
          >
            <circle cx="1" cy="1" r="1"></circle>
          </svg>
          <p className="text-sm font-normal text-muted">MIT license</p>
        </div>
        <h1 className="py-[24px] text-[2.25rem] font-bold leading-[2.5rem] tracking-[-.025em] text-primary">
          Discover highly useful Frontend <br /> Development Resources & Tools
        </h1>
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <a
            href="https://github.com/mukhammadxuja/frontend-resources"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn_primary flex items-center gap-x-1.5"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-white dark:fill-black"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
              ></path>
            </svg>
            <span>Github</span>
          </a>
            <button onClick={() => setOpenDialog(true)} className="btn btn_ghost group flex items-center gap-x-1.5">
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

              <span>Submit</span>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
