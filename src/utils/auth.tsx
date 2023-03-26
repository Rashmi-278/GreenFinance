import * as React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useAuth, useIsAuthenticated } from "@polybase/react";
export const AuthConnectButtons = () => {
  const { auth } = useAuth();
  const [isLoggedIn, loading] = useIsAuthenticated();

  if (loading) return <div>Loading...</div>;
  return (
    <ButtonGroup>
      {isLoggedIn ? (
        <Button color={"red"} onClick={() => auth.signOut()}>
          Sign Out
        </Button>
      ) : (
        <Button color={"green"} onClick={() => auth.signIn()}>
          Sign In
        </Button>
      )}
    </ButtonGroup>
  );
};
