/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Search from './search';
import Menu from './menu';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 300 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    };
  }, []);

  return (
    <nav
      // style={
      //   navBg
      //     ? {
      //         backgroundColor: 'var(--bg-background)',
      //         transitionDuration: '0.3s',
      //         borderBottom: 'black',
      //       }
      //     : { transitionDuration: '0.3s' }
      // }
      className="bg-foreground/90 absolute top-0 z-[100] w-full border-b border-border py-4 backdrop-blur-lg md:container md:mx-auto md:py-4"
    >
      <div className="flex w-full items-center space-x-4">
        <div className="flex items-center space-x-2 lg:space-x-3">
          <Link href="/">
            <span>
              <img
                className="z-[100000] block w-8 rotate-90 cursor-pointer duration-300 hover:opacity-60 dark:hidden md:w-10"
                src="/logo-light.svg"
                alt=""
              />
              <img
                className="z-[100000] hidden w-8 rotate-90 cursor-pointer duration-300 hover:opacity-60 dark:block md:w-10"
                src="/logo-dark.svg"
                alt=""
              />
            </span>
          </Link>
        </div>

        {search && (
          <div
            onClick={() => setSearch((prev) => !prev)}
            className="before:fixed before:top-0 before:left-0 before:z-0 before:h-screen before:w-full before:bg-black before:bg-opacity-30 before:backdrop-blur-lg"
          />
        )}

        <Search search={search} setSearch={setSearch} />

        {open && (
          <div
            onClick={() => setOpen((prev) => !prev)}
            className="before:fixed before:top-0 before:left-0 before:z-0 before:h-screen before:w-full before:bg-black before:bg-opacity-30 before:backdrop-blur-lg"
          />
        )}

        <Menu open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
