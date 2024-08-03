/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Frontend Resources</title>
        <meta
          name="description"
          content="Frontend Resources - A curated list of the best Frontend Resources"
        />
        <meta
          name="keywords"
          content="nextjs, SEO, meta tags, awesome website"
        />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="My Awesome Website" />
        <meta
          property="og:description"
          content="This is the description of my awesome website"
        />
        <meta property="og:image" content="/images/tools/angular-js.png" />
        <meta property="og:url" content="https://www.myawesomewebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Awesome Website" />
        <meta
          name="twitter:description"
          content="This is the description of my awesome website"
        />
        <meta name="twitter:image" content="/path/to/image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
