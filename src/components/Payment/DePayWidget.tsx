import DePayWidgets from '@depay/widgets';

export default function DePayWidget(props: any) {
    return (
        <DePayWidgets.Payment
        accept={[
            {
            blockchain: "ethereum",
            token: "0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb",
            receiver: "0x86b9eA8f3fb705fCFAfbAD59D48A869d79972eeF",
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