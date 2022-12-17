import { ThemeProvider } from 'next-themes';
import { appWithTranslation } from 'next-i18next';
import { CardContextProvider } from 'context/cardContext';

import 'styles/globals.css';
import Layout from 'components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" enableSystem={true} attribute="class">
      <CardContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CardContextProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
