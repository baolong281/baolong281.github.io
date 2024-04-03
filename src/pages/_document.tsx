import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>dylan h.</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <GoogleAnalytics gaId="G-DZCTC0J1XD" />
    </Html>
  );
}
