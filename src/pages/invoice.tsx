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
import ViewInvoice from "../components/viewInvoice";
import Step1_From from "../components/InvoiceForm/Step1_From";
import Step2_To from "../components/InvoiceForm/Step2_To";
import Step3_Work from "../components/InvoiceForm/Step3_Work";

enum Currency {
  USD = "USD",
  EUR = "EUR",
  GBP = "GBP",
  INR = "INR",
}

type FormValues = {
  clientDetails: {
    firstName: string;
    lastName: string;
    organization: string;
    email: string;
    country: string;
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
    taxId: string;
    walletAddress: string;
  };
  contractorDetails: {
    firstName: string;
    lastName: string;
    organization: string;
    email: string;
    country: string;
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
    taxId: string;
    walletAddress: string;
  };

  invoiceSummary: {
    invoiceNumber: string;
    issuedDate: string;
    dueDate: string;
    fromAddress: Object; //ContractorDetails
    toAddress: Object; //ClientDetails
    invoiceItems: {
      item: string;
      description: string;
      quantity: number;
      price: string;
      amount: number;
      discount: number;
      tax: number;
    }[];
    currency: Currency.USD;
    amountDue: number;
    totalAmount: number;
    AmountWithouTax: number;
    totalTax: number;
  };
};

export default function InvoiceForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <Box
      bg="#edf3f8"
      _dark={{
        bg: "#111",
      }}
      p={10}
    >
      <Text fontSize="4xl">Invoice #number </Text>

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
      
    </Box>
  );
}
