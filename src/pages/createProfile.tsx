import * as React from "react";
import { Polybase } from "@polybase/client";
import { AuthConnectButtons } from "../utils/auth";
import { useAuth } from "@polybase/react";
import { Button, Center, Heading, VStack } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { DBHandler } from "../utils/database";
import Header from "../components/Header";

export default function createProfile() {
  let user;
  const { auth, state, loading } = useAuth();
  const toast = useToast();

  if (loading) return <div>Loading...</div>;

  const collectionReference = DBHandler.collection("User");

  auth.onAuthUpdate((authState) => {
    if (authState) {
      user = authState;
    }
  });

  const createProfile = async () => {
    if (readProfile(user.userId)) {
      toast({
        title: "Account exists.",
        description: "You've already created an account with us.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    const recordData = await collectionReference.create([
      user.userId,
      user.userId,
    ]);

    toast({
      title: "Account Created!",
      description: "Now lets get started!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    console.log("Record created: " + JSON.stringify(recordData));
  };

  const readProfile = async (id) => {
    const { data, block } = await collectionReference.record(id).get();
    if (!data) {
      console.error("No record found");
      return;
    } else {
      console.log("Record found: " + JSON.stringify(data));
      alert("Record found: " + JSON.stringify(data));
      return data;
    }
  };

  return (
    <>
      <Header />

      <Center mt={20}>
        <VStack>
        <Heading>Create Profile</Heading>
        <VStack>
          <Button onClick={() => createProfile()}>Create</Button>
          <Button onClick={() => readProfile(user?.userId)}>Read</Button>
        </VStack>
        </VStack>
        
      </Center>
    </>
  );
}
