import { ThemeProvider } from 'next-themes';
import { appWithTranslation } from 'next-i18next';
import { MainContextProvider } from 'context/MainContext';

import 'styles/globals.css';
import Layout from 'components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" enableSystem={true} attribute="class">
      <MainContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainContextProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
