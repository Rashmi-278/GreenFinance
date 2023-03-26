import DePayButtons from "@depay/buttons";

export default function DePay(props: any) {
  return (
    <DePayButtons.DePayButton
      label={"Pay"}
      widget={"Payment"}
      configuration={{
        accept: [
          {
            blockchain: "ethereum",
            token: "0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb",
            receiver: "0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02",
          },

        ],
        amount: {
          currency: 'USD',
          fix: props.amount,
        }
      }}
    />
  );
}
