import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import * as React from "react";
import { PolybaseProvider, AuthProvider } from "@polybase/react";
import { Polybase } from "@polybase/client";
import { Auth } from "@polybase/auth";
import { AppProvider } from "../utils/state";
import { load } from "../utils/schemaLoad";
const polybase = new Polybase();
const auth = typeof window !== "undefined" ? new Auth() : null;

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

export async function getServerSideProps({ req, res }) {
  console.log("getServerSideProps");
   await load();
    return { props: {} };
}