import { Stack, HStack, VStack, Text } from "@chakra-ui/react";

export default function getUserCard(User) {
  return (
    <Stack>
      <VStack>
        {User.firstName} + {User.lastName}
        <Text>{User.organization}</Text>
        <Text>
          {User.streetAddress} + {User.city} + {User.state}
          {User.country} + {User.zip}
        </Text>
        <Text>{User.taxId}</Text>
        <Text>{User.emali}</Text>
      </VStack>
    </Stack>
  );
}
