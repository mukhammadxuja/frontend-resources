import { ThemeProvider } from 'next-themes';
import { appWithTranslation } from 'next-i18next';
import { MainContextProvider } from 'context/MainContext';

import 'styles/globals.css';
import Layout from 'components/layout';
import { ApiContextProvider } from 'context/ApiContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" enableSystem={true} attribute="class">
      <ApiContextProvider>
        <MainContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MainContextProvider>
      </ApiContextProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
