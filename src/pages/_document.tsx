import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <meta name="theme-color" content="#000000" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta
        property="og:image"
        content="https://www.iphea.org.br/thumbnail.jpg"
      />
      <meta property="og:image:width" content="120" />
      <meta property="og:image:height" content="86" />
      <meta property="og:site_name" content="Instituto IPHEA" />
      <meta property="og:title" content="Instituto IPHEA" />
      <meta
        name="description"
        content="O IPHEA é uma organização sem fins lucrativos, fundada em 1999, com o objetivo de promover o desenvolvimento sustentável através da integração equilibrada dos pilares humano, econômico e ambiental."
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:url" content="https://iphea.org.br" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
