import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head></Head>
        <body className="bg-white dark:bg-[#0e1111]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
