import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="container mx-auto border-y border-slate-200 bg-white bg-opacity-60 py-2.5 filter backdrop-blur-lg dark:bg-slate-900 md:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 lg:space-x-3">
          <Link href="/">
            <a className="whitespace-nowrap text-lg font-bold md:text-2xl">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-slate-600"
              >
                <path
                  d="M4.94223 5.24598C6.56161 3.6999 8.76048 2.79745 10.9891 2.68521C11.7519 2.68521 12.5169 2.68979 13.2796 2.68292C13.2407 3.50063 13.2796 4.32063 13.2567 5.13833C13.1491 6.96615 12.4734 8.75273 11.335 10.1866C9.85534 12.1152 7.59233 13.4093 5.1896 13.7437C4.14055 13.9132 3.07547 13.8056 2.01956 13.8353C2.03788 12.9352 1.98062 12.0327 2.05162 11.1348C2.25777 8.90848 3.30911 6.77603 4.94223 5.24598Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M13.9855 2.68292C14.8032 2.69208 15.6209 2.67834 16.4409 2.6875C18.4817 2.8318 20.4951 3.61515 22.032 4.97342C23.727 6.42788 24.8883 8.50765 25.186 10.7294C25.3166 11.7601 25.2341 12.8023 25.2845 13.8376C24.5699 13.8353 23.8575 13.833 23.1429 13.8376C21.3861 13.7895 19.6591 13.2215 18.1886 12.2641C17.5106 11.7785 16.8143 11.286 16.3058 10.6126C15.1903 9.36658 14.4321 7.80218 14.1458 6.15302C13.9305 5.00777 14.0176 3.83962 13.9855 2.68292Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M2.02067 14.4927C2.74676 14.5339 3.47514 14.4583 4.19893 14.5385C7.29797 14.6049 10.3054 16.3457 11.911 18.9958C12.8318 20.48 13.3265 22.2391 13.2624 23.9868C13.2601 24.5594 13.2693 25.1297 13.2533 25.7001C12.1034 25.6657 10.9421 25.7596 9.80377 25.5374C7.27506 25.1114 4.95021 23.6065 3.55072 21.4581C2.49022 19.8959 1.96112 17.988 2.01609 16.1029C2.01609 15.5646 2.01609 15.0287 2.02067 14.4927Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M21.4145 14.7353C22.6605 14.4581 23.9455 14.5039 25.2121 14.5039L25.2671 14.5589C25.2396 15.7568 25.3335 16.9685 25.093 18.1527C24.5868 20.8097 22.8277 23.1826 20.4616 24.4859C18.9888 25.3059 17.2984 25.709 15.6149 25.6907C15.0767 25.693 14.5361 25.6815 13.9978 25.6976C13.9978 24.7058 13.9566 23.7094 14.0688 22.7222C14.33 20.3332 15.6218 18.1092 17.4794 16.6066C18.6292 15.6996 19.9806 15.0422 21.4145 14.7353Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </Link>
          <Link href="/jobs">
            <a className="btn whitespace-nowrap text-lg font-medium">Resources</a>
          </Link>
          <Link href="/jobs">
            <a className="btn whitespace-nowrap text-lg font-normal text-gray-500">Jobs</a>
          </Link>
          {/* <span className="text-purple300 mt-1 rounded-xl border border-slate-300 bg-slate-100 px-1 text-xs font-semibold md:px-1.5 md:text-sm">
            v1.0.0
          </span> */}
        </div>
        <a
          href="https://github.com/mukhammadxuja/frontend-resources"
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center space-x-1 rounded-md py-1 px-2 duration-200 hover:bg-gray-50"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 fill-slate-900"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
            ></path>
          </svg>
          <span className="text-sm font-bold text-slate-900 md:text-base">
            Github
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
