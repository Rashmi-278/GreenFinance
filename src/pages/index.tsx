import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import * as React from "react";
import { AuthConnectButtons } from "../utils/auth";


export default function Index() {
  return (
    <Container height="100vh">
      <Hero />
      <Main>
        <Text color="text" mt={5}>
          This project was made with <Code>Next.js</Code> + <Code>chakra-ui</Code> +{" "}
          <Code>TypeScript</Code>.
        </Text>

        <List spacing={3} my={0} color="text" mt={5}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink
              isExternal
              href="https://polybase.xyz/"
              flexGrow={1}
              mr={2}
            >
              Polybase <LinkIcon />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink
              isExternal
              href="https://depay.fi/"
              flexGrow={1}
              mr={2}
            >
              Depay Finance <LinkIcon />
            </ChakraLink>
          </ListItem>
        </List>
      </Main>

      {/* <DarkModeSwitch /> */}
      {/* <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer> */}
      <CTA />
    </Container>
  );
}
