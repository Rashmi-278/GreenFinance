import { Polybase } from "@polybase/client";
import { Auth } from '@polybase/auth'

const auth = typeof window !== "undefined" ? new Auth() : null;

export const DBHandler = new Polybase({
  defaultNamespace:
    "pk/0xc7385a050cbcb4565aaf52db136b04f47342ca7acc23cb160ca1cdc8ab97a4396bb8a8316a0628ba98b0c119f054ee35d65e474ed060fdb746dcecc77db5569a/GreenFinance",
  signer: async (data) => {
    return { h: "eth-personal-sign", sig: await auth.ethPersonalSign(data) };
  },
});

const schema = `
@public
collection Organization {
  id: string; 
  publicKey: string;
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

  constructor (id: string,  
    firstName: string,
    lastName: string,
    organization: string,
    email: string,
    country: string,
    streetAddress: string,
    city: string,
    state: string,
    zip: string,
    taxId: string,
    walletAddress: string) {
    this.id = id;
    this.publicKey = ctx.publicKey.toHex();
    this.firstName = firstName;
    this.lastName = lastName;
    this.organization = organization;
    this.email = email;
    this.country = country;
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.taxId = taxId;
    this.walletAddress = walletAddress;
  }

  setWalletAddress(walletAddress: string) {
    if (this.publicKey != ctx.publicKey.toHex()) {
      throw error ('invalid owner');
    }
    this.walletAddress = walletAddress;
  }
}

@public
collection Item {
  id: string;
  name?: string;
  perAmount: number;
  quantity: number;
  discount: number;
  tax: number;
  itemTotal: number;
  orgWalletAddress: string;
publicKey: string;
    constructor (id: string, name: string, perAmount: number, quantity: number, discount: number, tax: number, itemTotal: number, orgWalletAddress: string) {
    this.id = id;
    this.name = name;
    this.perAmount = perAmount;
    this.quantity = quantity;
    this.discount = discount;
    this.tax = tax;
    this.itemTotal = itemTotal;
    this.orgWalletAddress = orgWalletAddress;
    this.publicKey = ctx.publicKey.toHex();
    }

    setItemName(name: string) {
        if (this.publicKey != ctx.publicKey.toHex()) {
            throw error ('invalid owner');
        }
        this.name = name;
    }
}

@public
collection Invoice {
    id: string;
    invoiceNumber: string;
    issuedDate: string;
    dueDate: string;
    fromAddress: Organization;
    toAddress: Organization;
    invoiceItems: Item[];
    currency: string;
    amountDue: number;
    totalAmount: number;
    AmountWithouTax: number;
    totalTax: number;
    publicKey: string;
    constructor (id: string, invoiceNumber: string, issuedDate: string, dueDate: string, fromAddress: Organization, toAddress: Organization, invoiceItems: Item[], currency: string, amountDue: number, totalAmount: number, AmountWithouTax: number, totalTax: number) {
        this.id = id;
        this.invoiceNumber = invoiceNumber;
        this.issuedDate = issuedDate;
        this.dueDate = dueDate;
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.invoiceItems = invoiceItems;
        this.currency = currency;
        this.amountDue = amountDue;
        this.totalAmount = totalAmount;
        this.AmountWithouTax = AmountWithouTax;
        this.totalTax = totalTax;
        this.publicKey = ctx.publicKey.toHex();
    }   

    setInvoiceNumber(invoiceNumber: string) {
        if (this.publicKey != ctx.publicKey.toHex()) {
            throw error ('invalid owner');
        }
        this.invoiceNumber = invoiceNumber;
    }
}


@public
collection User {
    id: string;
    publicKey: string;
    username: string;
    email?: string;
  walletAddress: string;
    createdInvoices?: Invoice[];
    receivedInvoices?: Invoice[];
    constructor (id: string, username: string, walletAddress: string) {
        this.id = id;
        this.publicKey = ctx.publicKey.toHex();
        this.username = username;
        this.walletAddress = walletAddress;
  }

    updateCreateInvoices(invoice: Invoice) {

        if (this.publicKey != ctx.publicKey.toHex()) {
            throw error ('invalid owner');
        }
        this.createInvoices.push(invoice);
    }
  updateReceivedInvoices(invoice: Invoice) {

        if (this.publicKey != ctx.publicKey.toHex()) {
            throw error ('invalid owner');
        }
        this.receivedInvoices.push(invoice);
    }
}

`;

export async function loadSchema() {
  await DBHandler.applySchema(schema, "greenfinance");
  return "Schema loaded";
}

