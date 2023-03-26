import { Flex, Heading, Center, Image, VStack, Text } from "@chakra-ui/react";

export const Hero = ({
  name,
  title,
  subTitle,
}: {
  name: string;
  title: string;
  subTitle: string;
}) => (
  <Center>
    <Text
      display={{
        base: "block",
        lg: "inline",
      }}
      w="full"
      bgClip="text"
      bgGradient="linear(to-r, green.400,green.900)"
      fontWeight="extrabold"
      fontSize={'5vw'}
    >
      Green Finance
    </Text>

    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      bgClip="text"
    >
      <VStack>
        <Heading fontSize="4vw">{title}</Heading>
        <Heading fontSize="2vw">{subTitle}</Heading>
      </VStack>
    </Flex>
  </Center>
);

Hero.defaultProps = {
  name: "Green Finance",
  title: "Web3 Invoicing Made Easy",
  subTitle: "Create, send and track invoices in seconds",
};
