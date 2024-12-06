import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="new-gr-c-s-check-loaded" content="false" />
        <meta name="gr-ext-installed" content="false" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}