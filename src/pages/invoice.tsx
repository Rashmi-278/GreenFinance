import {
  SimpleGrid,
  GridItem,
  Heading,
  chakra,
  Stack,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  Text,
  Textarea,
  FormHelperText,
  Flex,
  Avatar,
  Icon,
  Button,
  VisuallyHidden,
  Divider,
  Select,
  Checkbox,
  RadioGroup,
  Radio,
  Box,
  typography,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import { useForm, Resolver } from "react-hook-form";
import ViewInvoice from "../components/Display/viewInvoice";
import Step1_From from "../components/InvoiceForm/Step1_From";
import Step2_To from "../components/InvoiceForm/Step2_To";
import Step3_Work from "../components/InvoiceForm/Step3_Work";
import Step0 from "../components/InvoiceForm/Step0";
import Header from "../components/Header";
// dynamic import of DePayButtons
import dynamic from "next/dynamic";
//const DePayButtons = dynamic(() => import("@depay/buttons"), { ssr: false });
import DePayButtons from "@depay/buttons";
import { useAppState } from "../utils/state";

export default function InvoiceForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [state, State] = useAppState();

  return (
    <>
      <Header />
      <Box
        bg="#edf3f8"
        _dark={{
          bg: "#111",
        }}
        p={10}
      >
        <Text fontSize="4xl">Create Invoice </Text>

        <Step0 />

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

        <Step1_From />

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

        <Step2_To />

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

        <Step3_Work />

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

        {/* <DePayButtons.DePayButton
          label={"Pay"}
          widget={"Payment"}
          configuration={{
            accept: [
              {
                blockchain: "ethereum",
                token: "0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb",
                receiver: "0x86b9eA8f3fb705fCFAfbAD59D48A869d79972eeF",
              },
            ],
            amount: {
              currency: "USD",
            },
          }}
        /> */}
      </Box>
    </>
  );
}
