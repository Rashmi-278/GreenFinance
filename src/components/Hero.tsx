import { Flex, Heading, Center, Image, VStack } from "@chakra-ui/react";

export const Hero = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => (
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
);

Hero.defaultProps = {
  title: "Web3 Invoicing Made Easy",
  subTitle: "Create, send and track invoices in seconds",
};
