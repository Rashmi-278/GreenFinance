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
export default function Step2_To() {
  const [state, setState] = useAppState();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const watchPassword = watch("password");

  const saveData = (data) => {
    setState({ ...state, to: { ...data } });
    router.push("/invoice/step2");
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
              Contractor Information
            </Heading>
            <Text
              mt={1}
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              Enter the contractor information
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
                    htmlFor="first_name"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: "gray.50",
                    }}
                  >
                    First name
                  </FormLabel>
                  <Input
                    type="text"
                    name="first_name"
                    id="to_first_name"
                    {...register("tofirstName", {
                      required: "First name is required",
                    })}
                    autoComplete="given-name"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    htmlFor="last_name"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: "gray.50",
                    }}
                  >
                    Last name
                  </FormLabel>
                  <Input
                    type="text"
                    name="last_name"
                    id="to_last_name"
                    autoComplete="family-name"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...register("lastName", {
                      required: "last name is required",
                    })}
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 4]}>
                  <FormLabel
                    htmlFor="email_address"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: "gray.50",
                    }}
                  >
                    Email address
                  </FormLabel>
                  <Input
                    type="email"
                    name="email_address"
                    id="to_email_address"
                    autoComplete="email"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...register("toEmail", {
                      required: "Email is required",
                    })}
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    htmlFor="country"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: "gray.50",
                    }}
                  >
                    Country / Region
                  </FormLabel>
                  <Input
                    type="text"
                    name="country"
                    id="to_country"
                    autoComplete="country"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...register("toCountry", {
                      required: "This is required",
                    })}
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={6}>
                  <FormLabel
                    htmlFor="street_address"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: "gray.50",
                    }}
                  >
                    Street address
                  </FormLabel>
                  <Input
                    type="text"
                    name="street_address"
                    id="to_street_address"
                    autoComplete="street-address"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...register("toStreet", { required: true })}
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                  <FormLabel
                    htmlFor="city"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: "gray.50",
                    }}
                  >
                    City
                  </FormLabel>
                  <Input
                    type="text"
                    name="city"
                    id="to_city"
                    autoComplete="city"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...register("toCity", { required: true })}
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                  <FormLabel
                    htmlFor="state"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: "gray.50",
                    }}
                  >
                    State / Province
                  </FormLabel>
                  <Input
                    type="text"
                    name="state"
                    id="to_state"
                    autoComplete="state"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...register("toState", { required: true })}
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                  <FormLabel
                    htmlFor="postal_code"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: "gray.50",
                    }}
                  >
                    ZIP / Postal
                  </FormLabel>
                  <Input
                    type="text"
                    name="postal_code"
                    id="to_postal_code"
                    autoComplete="postal-code"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...register("toPostal", { required: true })}
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 4]}>
                  <FormLabel
                    htmlFor="email_address"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: "gray.50",
                    }}
                  >
                    Tax number
                  </FormLabel>
                  <Input
                    type="text"
                    name="tax_number"
                    id="to_tax_number"
                    autoComplete="text"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...register("toTaxID", { required: true })}
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
