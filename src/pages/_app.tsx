import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import * as React from "react";
import { PolybaseProvider, AuthProvider } from "@polybase/react";
import { Polybase } from "@polybase/client";
import { Auth } from "@polybase/auth";
import { AppProvider } from "../utils/state";
const polybase = new Polybase();
const auth = typeof window !== "undefined" ? new Auth() : null;

const db = new Polybase({
  defaultNamespace: "pk/0xc7385a050cbcb4565aaf52db136b04f47342ca7acc23cb160ca1cdc8ab97a4396bb8a8316a0628ba98b0c119f054ee35d65e474ed060fdb746dcecc77db5569a/GreenFinance",
});

export default function MyApp({ Component, pageProps }: AppProps) {
 
  return (
    <AppProvider>
      <PolybaseProvider polybase={polybase}>
        <AuthProvider auth={auth} polybase={polybase}>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </AuthProvider>
      </PolybaseProvider>
    </AppProvider>
  );
}

