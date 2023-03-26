# Green Finance : Web3 Invoicing Platform

###### Buidl in progress

### Intro

Invoicing is an essential part of any business, as it facilitates payment processing and helps keep track of financial transactions. However, traditional invoicing processes can be cumbersome, time-consuming, and prone to errors. With the advent of Web3 tools, businesses now have access to a more efficient and secure invoicing platform.

Web3 tools are built on blockchain technology, which offers transparency, security, and decentralization. By leveraging the power of Web3, businesses can create an invoicing platform that is more reliable, streamlined, and cost-effective. The platform allows for instant payment processing, automatic reconciliation, and real-time tracking of payments.

In addition, the Web3 invoicing platform enables businesses to transact in a more transparent and secure manner. By using smart contracts, businesses can establish trust with their customers, eliminating the need for intermediaries and reducing the risk of fraud. The platform also allows for more flexible payment options, including cryptocurrencies, which can help businesses expand their customer base and reach a global audience.

### Features

- Web3 wallet and email signin
- Create Invoice with all the neccessary details

###### buidling
- Profile dashboard to list invoices
- Pay the invoice with Crypto , powered by Depay

### Pages

/ - Landing page
Home page for Green Finance

/createProfile

/invoice - Create Invoice
Create an invoice

More pages to be added

#### Things worked on during hack

##### Frontend
- Landing page
- Chakra UI Components
- Invoice form
- Stepper invoice form
- react-hook-form connect
- context API for Global state management

##### Polybase
- Authentication
- Schema
- Functions to update
- Read function and validation
- Write function and validation

##### ZkSync via Depay
Depay is payments tool discovered through ZkSync Ecosystem : https://ecosystem.zksync.io/
- Depay Button
- Depay widget

##### IPFS and Filecoin via Spheron Network
- Deployed on Spheron



# Example app with [chakra-ui](https://github.com/chakra-ui/chakra-ui) and TypeScript

This example features how to use [chakra-ui](https://github.com/chakra-ui/chakra-ui) as the component library within a Next.js app with TypeScript.

Next.js and chakra-ui have built-in TypeScript declarations, so we'll get autocompletion for their modules straight away.

We are connecting the Next.js `_app.js` with `chakra-ui`'s Provider and theme so the pages can have app-wide dark/light mode. We are also creating some components which shows the usage of `chakra-ui`'s style props.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-chakra-ui)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-chakra-ui&project-name=with-chakra-ui&repository-name=with-chakra-ui)

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-chakra-ui with-chakra-ui-app
```

```bash
yarn create next-app --example with-chakra-ui with-chakra-ui-app
```

```bash
pnpm create next-app --example with-chakra-ui with-chakra-ui-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

Chakra has supported Gradients and RTL in `v1.1`. To utilize RTL, [add RTL direction and swap](https://chakra-ui.com/docs/features/rtl-support).

If you don't have multi-direction app, you should make `<Html lang="ar" dir="rtl">` inside `_document.ts`.
