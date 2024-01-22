import Typography from "@mui/joy/Typography";

const Price = ({
    amount,
    currencyCode = "USD",
    
}: {
    amount: string;
    currencyCode: string;
    
}) => {
    return (
   
        <Typography level="body-xs">
            {`${new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: currencyCode,
            currencyDisplay: 'narrowSymbol'
            }).format(parseFloat(amount))}`}
        </Typography>
        
    )
};
export default Price;