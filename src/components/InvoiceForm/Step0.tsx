import {
  Box,
  Text,
  SimpleGrid,
  GridItem,
  Heading,
  chakra,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAppState } from "../../utils/state";
import { useRouter } from "next/router";
import { useAuth, useIsAuthenticated } from "@polybase/react";
import { DBHandler } from "../../utils/database";

const InvoiceReference = DBHandler.collection("Invoice");
const UserReference = DBHandler.collection("User");

const initInvoice = async (invoiceNumber, userId) => {
  // generate invoice id of 10 digits
  const invoiceId = Math.floor(Math.random() * 1000000000).toString();
  // get date in string format
  const issueDate = new Date().toLocaleDateString();
  // get date plus 30 days in string format
  const dueDate = new Date(
    new Date().setDate(new Date().getDate() + 30)
  ).toLocaleDateString();


  const recordData = await InvoiceReference.create([
    invoiceId,
    invoiceNumber,
    issueDate,
    dueDate,
  ]);

  console.log("Invoice initialized: " + JSON.stringify(recordData));

  // update user record with invoice id
  const { data, block } = await InvoiceReference.record(invoiceId).get();
  if (!data) {
    console.error("No record found");
    return;
  } else {
    console.log("Record found: " + JSON.stringify(data));
    console.log("userId: " + userId);
    const recordData = await UserReference.record(userId).call(
      "updateCreatedInvoices",
      [invoiceId]
    );
    console.log("Record updated: " + JSON.stringify(recordData));
  }
};

export default function Step1_From() {
  const [formstate, setFormState] = useAppState();
  const [isLoggedIn, loading] = useIsAuthenticated();
  const { auth, state } = useAuth();

  const router = useRouter();
  const {
    handleSubmit,
    register,
    watch,
  } = useForm({ defaultValues: formstate, mode: "onSubmit" });

  const saveData = (data) => {
    setFormState({ ...formstate, from:{...data} });
    initInvoice(data.invoiceId, state.userId);
    //router.push("/invoice/step2");
  };




  return (
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
              Invoice Information
            </Heading>
            <Text
              mt={1}
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              Enter Invoice details
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
                    htmlFor="invoiceId"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: "gray.50",
                    }}
                  >
                    Invoice
                  </FormLabel>
                  <Input
                    type="number"
                    name="invoiceId"
                    id="invoiceId"
          
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...register('invoiceId', { required: true })} 
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    htmlFor="issuedDate"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: "gray.50",
                    }}
                  >
                    Issued Date
                  </FormLabel>
                  <Input
                    type="date"
                    name="issuedDate"
                    id="issuedDate"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    disabled
                    rounded="md"
                    // {...register("issuedDate", {
                    //   required: "This is required",
                    // })}
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    htmlFor="dueDate"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: "gray.50",
                    }}
                  >
                    Due Date
                  </FormLabel>
                  <Input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    disabled
                    rounded="md"
                    // {...register("dueDate", {
                    //   required: "This is required",
                    // })}
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    htmlFor="currency"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: "gray.50",
                    }}
                  >
                    Currency
                  </FormLabel>
                  <Input
                    type="text"
                    name="currency"
                    id="currency"
                    mt={1}
                    disabled
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    // {...register("currency", { required: true })}
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
                colorScheme="green"
                _focus={{
                  shadow: "",
                }}
                fontWeight="md"
              >
                Save
              </Button>
            </Box>
          </chakra.form>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
