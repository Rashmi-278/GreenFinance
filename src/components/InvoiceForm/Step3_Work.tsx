import {
  Box,
  Text,
  GridItem,
  Heading,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Divider,
  chakra,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAppState } from "../../utils/state";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Step3_Work() {
  const [state, setState] = useAppState();
  const [items, setItems] = useState([]);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });

  const saveData = (data) => {
    setItems([...items, data]);
    console.log(items);
    //setState({ ...state, ...data });
    //router.push("/invoice/step3");
  };
  return (
    <>
      <Box mt={[10, 0]}>
        <SimpleGrid
          display={{
            base: "initial",
            md: "grid",
          }}
          columns={{
            md: 3,
          }}
          spacing={{
            md: 6,
          }}
        >
          <GridItem
            colSpan={{
              md: 1,
            }}
          >
            <Box px={[4, 0]}>
              <Heading
                fontSize="lg"
                fontWeight="medium"
                lineHeight="6"
                fontStyle={"bold"}
              >
                Items
              </Heading>
              <Heading fontSize="md" fontWeight="medium" lineHeight="6">
                Invoice items
              </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
              >
                Add items to be included in the invice
              </Text>
            </Box>
          </GridItem>
          <GridItem
            mt={[5, null, 0]}
            colSpan={{
              md: 2,
            }}
          >
            <chakra.form
              method="POST"
              shadow="base"
              rounded={[null, "md"]}
              overflow={{
                sm: "hidden",
              }}
              onSubmit={handleSubmit(saveData)}
            >
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg="white"
                _dark={{
                  bg: "#141517",
                }}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="itemName"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Item Name
                    </FormLabel>
                    <Input
                      type="text"
                      name="itemName"
                      id="itemName"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("itemName", { required: true })}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="itemId"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      ItemID
                    </FormLabel>
                    <Input
                      type="text"
                      name="itemId"
                      id="itemid"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("itemId", { required: true })}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                    <FormLabel
                      htmlFor="iquantity"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Quantity
                    </FormLabel>
                    <Input
                      type="number"
                      name="iquantity"
                      id="iquantity"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("iquantity", { required: true })}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="perAmount"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Per Amount
                    </FormLabel>
                    <Input
                      type="number"
                      name="perAmount"
                      id="perAmount"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("perAmount", { required: true })}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="amount"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Amount
                    </FormLabel>
                    <Input
                      type="number"
                      name="subAmount"
                      id="subAmount"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("subAmount", { required: true })}
                    />
                  </FormControl>
                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="taxperc"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Tax Percentage
                    </FormLabel>
                    <Input
                      type="number"
                      name="taxPerc"
                      id="taxPerc"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("taxPerc", { required: true })}
                    />
                  </FormControl>
                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="itemDiscount"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Discount
                    </FormLabel>
                    <Input
                      type="number"
                      name="discount"
                      id="itemDiscount"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("discount", { required: true })}
                    />
                  </FormControl>
                </SimpleGrid>
              </Stack>
              <Box
                px={{
                  base: 4,
                  sm: 6,
                }}
                py={3}
                bg="gray.50"
                _dark={{
                  bg: "#121212",
                }}
                textAlign="right"
              >
                <Button
                  type="submit"
                  colorScheme="blue"
                  _focus={{
                    shadow: "",
                  }}
                  fontWeight="md"
                >
                  Add Item
                </Button>
              </Box>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>

      <Divider
        my="5"
        borderColor="gray.300"
        _dark={{
          borderColor: "whiteAlpha.300",
        }}
        visibility={{
          base: "hidden",
          sm: "visible",
        }}
      />

      <Box mt={[10, 0]}>
        <SimpleGrid
          display={{
            base: "initial",
            md: "grid",
          }}
          columns={{
            md: 3,
          }}
          spacing={{
            md: 6,
          }}
        >
          <GridItem
            colSpan={{
              md: 1,
            }}
          >
            <Box px={[4, 0]}>
              <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                Work
              </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
              >
                Lorem Ipsum
              </Text>
            </Box>
          </GridItem>
          <GridItem
            mt={[5, null, 0]}
            colSpan={{
              md: 2,
            }}
          >
            <TableContainer>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Item ID</Th>
                    <Th>Title</Th>
                    <Th>Qty</Th>
                    <Th>Unit Price</Th>
                    <Th>Discount</Th>
                    <Th>Tax</Th>
                    <Th>Amount</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items.map((item, index) => {
                    return (
                      <Tr key={index}>
                        <Td>{item.itemId}</Td>
                        <Td>{item.itemName}</Td>
                        <Td>{item.iquantity}</Td>
                        <Td>{item.perAmount}</Td>
                        <Td>{item.discount}</Td>
                        <Td>{item.taxPerc}</Td>
                        <Td>{item.subAmount}</Td>
                      </Tr>
                    );
                  })}

                  <Tr>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td>Amount Without Tax</Td>
                    <Td isNumeric>$---</Td>
                  </Tr>
                  <Tr>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td>Total Tax Amount</Td>
                    <Td isNumeric>$---</Td>
                  </Tr>
                  <Tr>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td>Total Amount</Td>
                    <Td isNumeric>$---</Td>
                  </Tr>
                  <Tr>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td>Amount Due</Td>
                    <Td isNumeric>$---</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </GridItem>
        </SimpleGrid>
        <Box
          px={{
            base: 4,
            sm: 6,
          }}
          py={3}
          _dark={{
            bg: "#121212",
          }}
          textAlign="right"
        >
          <Button
            colorScheme="blue"
            _focus={{
              shadow: "",
            }}
            fontWeight="md"
          >
            Create and Send Invoice
          </Button>
        </Box>
      </Box>
    </>
  );
}
