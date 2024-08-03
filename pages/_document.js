/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#000" />
        <title>Frontend Resources</title>
        <meta
          name="description"
          content="Frontend Resources - A curated list of the best frontend resources"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />
        <meta
          property="og:title"
          content="Frontend Resources - A curated list of the best frontend resources"
        />
        <meta
          property="og:description"
          content="A curated list of the best frontend resources"
        />
        <meta
          property="og:url"
          content="https://frontendresources.vercel.app/"
        />
        <meta property="og:site_name" content="Frontend Resources" />
        <meta property="og:locale" content="en-US" />
        <meta
          property="og:image"
          content="https://designresourc.es/img/og.png"
        />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Frontend Resources - A curated list of the best frontend resources"
        />
        <meta
          name="twitter:description"
          content="A curated list of the best frontend resources"
        />
        <meta
          name="twitter:image"
          content="https://designresourc.es/img/og.png"
        />
        <meta name="twitter:image:width" content="1920" />
        <meta name="twitter:image:height" content="1080" />
        <meta name="next-size-adjust" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
