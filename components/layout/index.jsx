import { Navbar, Footer } from 'components';
import { useMainContext } from 'context/MainContext';

const Layout = ({ children }) => {
  const { search, setSearch, open, setOpen } = useMainContext();
  return (
    <div className={`${search && 'h-screen overflow-hidden'}`}>
      <nav>
        <Navbar />
      </nav>

      <main>{children}</main>
      {search && (
        <div
          onClick={() => setSearch((prev) => !prev)}
          className="!z-[2] before:fixed before:top-0 before:left-0 before:z-0 before:h-screen before:w-full before:bg-black before:bg-opacity-30 before:backdrop-blur-lg"
        />
      )}

      {open && (
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="!z-[2] before:fixed before:top-0 before:left-0 before:z-0 before:h-screen before:w-full before:bg-black before:bg-opacity-30 before:backdrop-blur-lg"
        />
      )}

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
