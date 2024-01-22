import Typography from "@mui/joy/Typography";
import Price from "./price";

const Label = ({
    title,
    amount,
    currencyCode,
    position = 'bottom'
  }: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  }) => {

    return (
        <>
            <Typography level="body-xs">{title}</Typography>
            <Price 
                amount={amount}
                currencyCode={currencyCode}
                //currencyCodeClassName="hidden @[275px]/label:inline"
            />
        </>
    )
};

  export default Label;