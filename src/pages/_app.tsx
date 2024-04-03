import { GoogleAnalytics } from "@next/third-parties/google";
import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-DZCTC0J1XD" />
    </>
  );
};

export default MyApp;
