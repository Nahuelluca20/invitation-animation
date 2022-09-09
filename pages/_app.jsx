import {ChakraProvider} from "@chakra-ui/react";

import "../styles/globals.css";
import {AppContext} from "../context/MusicContext";

function MyApp({Component, pageProps}) {
  return (
    <AppContext>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AppContext>
  );
}

export default MyApp;
