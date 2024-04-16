/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Search from './search';
import Menu from './menu';
import { useMainContext } from 'context/MainContext';

const Navbar = () => {
  const { search, setSearch, open, setOpen } = useMainContext();

  return (
    <nav className="bg-foreground/90 absolute top-0 left-0 right-0 z-[100] w-full border-b border-border py-4 backdrop-blur-lg md:container md:mx-auto md:py-4">
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

        <Search search={search} setSearch={setSearch} />

        <Menu open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
