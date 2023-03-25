import DePayWidgets from '@depay/widgets';

export default function DePayWidget(props: any) {
    return (
        <DePayWidgets.Payment
        accept={[
            {
            blockchain: "ethereum",
            token: "0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb",
            receiver: "0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02",
            },
        ]}
        amount={{
            currency: 'USD',
            fix: props.amount,
        }}
        track={{ endpoint: 'https://api.depay.fi/v1/track'   }}
        />
    );
    }