import { Navbar, Footer } from 'components';

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
