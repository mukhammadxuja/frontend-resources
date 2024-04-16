import React, { useState } from 'react';
import SearchList from './search-list';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { main } from 'data/test';

function Search({ search, setSearch }) {
  const [menu, setMenu] = useState('Tools');
  const [check, setCheck] = useState([]);

  const handleOptionToggle = (option) => {
    if (check.includes(option)) {
      setCheck(check.filter((item) => item !== option));
    } else {
      setCheck([...check, option]);
    }
  };

  const router = useRouter();
  const { pathname } = router;
  return (
    <div
      className={`relative h-full w-full rounded-xl ${search && 'shadow-md'}`}
    >
      <div
        className={`z-[1000] flex w-full flex-col items-center gap-2 md:flex-row ${
          search ? 'rounded-t-lg bg-foreground' : 'rounded-lg bg-transparent'
        } p-2`}
      >
        <div
          className={`flex w-full items-center rounded-lg bg-background pl-3`}
        >
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
            className="w-full rounded-lg bg-background py-3 px-2 shadow-sm outline-none placeholder:text-lg placeholder:text-muted"
            type="search"
            placeholder='Try searching "Onboarding"'
          />
        </div>
        <div className="flex w-fit items-center rounded-lg border border-border bg-background p-1">
          <Link href="/">
            <button
              className={`${
                pathname === '/'
                  ? 'bg-foreground'
                  : 'bg-transparent text-primary'
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
                pathname === '/jobs'
                  ? 'bg-foreground'
                  : 'bg-transparent text-primary'
              } btn flex items-center gap-x-1.5 py-2 duration-300 hover:opacity-80`}
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
        <div className="absolute h-[80vh] w-full rounded-b-xl bg-white px-3 shadow-md md:py-4">
          <div className="-mt-2 flex items-center gap-2 border-b border-border pb-2">
            <button
              onClick={() => handleOptionToggle('Free')}
              className={`btn flex cursor-pointer items-center gap-2 border border-emerald-200 bg-emerald-50 font-normal text-emerald-500 ${
                check.includes('Free') && 'border-emerald-400'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`h-4 w-4 text-emerald-500 ${
                  check.includes('Free') ? 'block' : 'hidden'
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>

              <span>Free</span>
            </button>
            <button
              onClick={() => handleOptionToggle('Paid')}
              className={`btn flex cursor-pointer items-center gap-2 border border-orange-200 bg-orange-50 font-normal text-orange-500 ${
                check.includes('Paid') && 'border-orange-400'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`h-4 w-4 text-orange-500 ${
                  check.includes('Paid') ? 'block' : 'hidden'
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>

              <span>Paid</span>
            </button>
            <button
              onClick={() => handleOptionToggle('Beta')}
              className={`btn flex cursor-pointer items-center gap-2 border border-purple-200 bg-purple-50 font-normal text-purple-500 ${
                check.includes('Beta') && 'border-purple-400'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`h-4 w-4 text-purple-500 ${
                  check.includes('Beta') ? 'block' : 'hidden'
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>

              <span>Beta</span>
            </button>
          </div>
          <div className="mt-2 md:grid md:grid-cols-5">
            <div className="">
              {main.map((category) => (
                <ul key={category.id}>
                  <SearchList
                    key={category.id}
                    title={category.title}
                    tag={category.title}
                    menu={menu}
                    setMenu={setMenu}
                  />
                </ul>
              ))}
            </div>
            <div className="col-span-4 ml-10">
              {main.map((category) => (
                <div key={category.id}>
                  {category.folders.map((folder) => (
                    <div
                      className={`${menu === category.title && 'hidden'}`}
                      key={folder.id}
                    >
                      <h3 className="text-xl font-bold">{folder.title}</h3>
                      <ul className="grid grid-cols-3 items-center gap-1 py-2">
                        {folder.resources.map((resource) => (
                          <li
                            key={resource.id}
                            className="flex w-full cursor-pointer items-center gap-2 rounded-lg bg-background py-2.5 pl-4 text-left font-semibold duration-300 hover:bg-border"
                          >
                            <span>{resource.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
