import { Link as ChakraLink, Button } from '@chakra-ui/react'

import { Container } from './Container'

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom={0}
    width="full"
    maxWidth="3xl"
    py={3}
  >
    
    <Button
      as={ChakraLink}
      isExternal
      href="https://github.com/Rashmi-278/GreenFinance"
      variant="outline"
      colorScheme="green"
      rounded="button"
      flexGrow={3}
      mx={2}
      width="full"
    >
      View Repo
    </Button>
    <Button
      as={ChakraLink}
      isExternal
      href="/invoice"
      variant="solid"
      colorScheme="green"
      rounded="button"
      flexGrow={1}
      mx={2}
      width="full"
    >
      Create Invoice
    </Button>
  </Container>
)
