import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Header from '../components/headers';
import Footer from '../components/footers';
import "../styles/globals.css";
// import '../public/fonts.css';

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// const activeChain = "ethereum";
const activeChain = "goerli";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThirdwebProvider>
  );
}

export default MyApp;
