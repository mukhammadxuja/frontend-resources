import React, { useState } from 'react';
import SearchList from './search-list';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Search({ search, setSearch }) {
  const [menu, setMenu] = useState('performance');

  const router = useRouter();
  const { pathname } = router;
  return (
    <div
      className={`relative h-full w-full rounded-xl ${search && 'shadow-md'}`}
    >
      <div
        className={`z-[1000] flex w-full flex-col items-center gap-2 md:flex-row ${
          search ? 'rounded-t-lg' : 'rounded-lg'
        } bg-white p-2`}
      >
        <div className={`flex w-full items-center rounded-lg bg-gray-100 pl-3`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>

          <input
            onClick={() => setSearch(true)}
            className="w-full rounded-lg bg-transparent py-3 px-2 outline-none placeholder:text-lg"
            type="search"
            placeholder='Try searching "Onboarding"'
          />
        </div>
        <div className="flex w-fit items-center rounded-lg bg-gray-100 p-1">
          <Link href="/">
            <button
              className={`${
                pathname === '/' ? 'bg-white' : 'bg-gray-100'
              } btn flex items-center gap-x-1.5 py-2 duration-300 hover:opacity-80`}
            >
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="KFIxS"
                prefix="WebIosSwitcher"
              >
                <circle cx="16" cy="16" r="10.667" fill="#54B6FF"></circle>
                <circle
                  cx="16"
                  cy="16"
                  r="10.667"
                  fill="url(#WebIosSwitcherplanetGradient1)"
                  fillOpacity="0.6"
                ></circle>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.91 8.856c1.925-.385 3.29-.248 3.726.508 1.011 1.752-3.352 6.164-9.745 9.855-6.394 3.692-12.397 5.264-13.408 3.512-.426-.737.1-1.945 1.33-3.373a10.675 10.675 0 0 1-.26-.877c-3.353 3.014-5.079 5.77-4.218 7.26 1.42 2.46 9.347.543 17.705-4.282 8.358-4.826 13.982-10.732 12.562-13.192-.852-1.476-4.046-1.376-8.27-.018.2.194.393.397.578.607Z"
                  fill="url(#WebIosSwitcherplanetGradient2)"
                ></path>
                <defs>
                  <radialGradient
                    id="WebIosSwitcherplanetGradient1"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(41.987 -9.969 20.767) scale(17.9382)"
                  >
                    <stop stopColor="#FCF3CE"></stop>
                    <stop
                      offset="0.5"
                      stopColor="#FCF3CD"
                      stopOpacity="0"
                    ></stop>
                    <stop
                      offset="0.723"
                      stopColor="#FCF3CD"
                      stopOpacity="0.095"
                    ></stop>
                    <stop offset="1" stopColor="#FCF3CD"></stop>
                  </radialGradient>
                  <radialGradient
                    id="WebIosSwitcherplanetGradient2"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-14.6667 8.6666 -13.08825 -22.14954 16 16.667)"
                  >
                    <stop stopColor="#FFBA78"></stop>
                    <stop offset="0.578" stopColor="#FD589B"></stop>
                    <stop offset="1" stopColor="#FFDE8C"></stop>
                  </radialGradient>
                </defs>
              </svg>
              <span>Resources</span>
            </button>
          </Link>
          <Link href="/jobs">
            <button
              className={`${
                pathname === '/jobs' ? 'bg-white' : 'bg-gray-100'
              } btn flex items-center gap-x-1.5 bg-white py-2 duration-300 hover:opacity-80`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-orange-900"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
                <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
              </svg>

              <span>Jobs</span>
            </button>
          </Link>
        </div>
      </div>
      {search && (
        <div
          className={`absolute md:grid h-[80vh] w-full md:grid-cols-5 rounded-b-xl bg-white px-3 md:py-4 shadow-md`}
        >
          <ul className="flex flow-row md:flex-col items-center md:items-start space-y-2">
            <SearchList
              title="Performance"
              tag="performance"
              menu={menu}
              setMenu={setMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                  clipRule="evenodd"
                />
                <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
                <path
                  fillRule="evenodd"
                  d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </SearchList>
            <SearchList title="Tools" tag="tools" menu={menu} setMenu={setMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-gray-600"
              >
                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
              </svg>
            </SearchList>
            <SearchList
              title="Design"
              tag="design"
              menu={menu}
              setMenu={setMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                  clipRule="evenodd"
                />
              </svg>
            </SearchList>
            <SearchList title="Jobs" tag="jobs" menu={menu} setMenu={setMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
                <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
              </svg>
            </SearchList>
          </ul>
          <div className="col-span-4 ml-10">spp</div>
        </div>
      )}
    </div>
  );
}

export default Search;
