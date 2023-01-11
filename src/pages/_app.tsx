import type { AppProps } from "next/app";
import { trpc } from "../server/utils/trpc";
import "../styles/global.css";
import "tailwindcss/tailwind.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(App);
