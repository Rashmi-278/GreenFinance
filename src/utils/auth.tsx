import * as React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useAuth } from "@polybase/react";

export const AuthConnectButtons = () => {
  const { auth, state, loading } = useAuth();

  // `state` is null if not logged in, or logged in state e.g. { type: "metamask", userId: "..." }

  // `auth` is the prop passed to AuthProvider as auth

  return (
    <ButtonGroup>
      <Button onClick={() => auth.signIn()}>Sign In</Button>
      <Button onClick={() => auth.signOut()}>Sign Out</Button>
      {JSON.stringify(state)} 
      <Button onClick={() => auth.ethPersonalSign("Dummy Dummy Data")}>Sign Data</Button>
    </ButtonGroup>
  );
};
