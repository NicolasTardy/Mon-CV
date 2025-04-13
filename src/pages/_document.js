// src/pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Site CV de Nicolas Tardy" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}