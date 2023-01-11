import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,300&family=Noto+Sans+JP:wght@100;300;400&family=Quicksand:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="debug-screens">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
