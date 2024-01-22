import Image from 'next/image';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Label from '../label';


export function GridTileImage({
  carousel=false,
  isInteractive = true,
  active,
  label,
  ...props
}: {
  carousel?: boolean;
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {

    
            
  return (
    <Card variant="outlined" sx={{
        //minHeight: '50vh',
        borderRadius: 0,
        border: 0,
        p: 0,
        gap: 0,
    }}>
       <AspectRatio ratio="2/3" objectFit="cover">
           
            {props.src ? (
                // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
                <Image layout="fill" 
                  {...props}
                  draggable={false}
                  style={{
                    height: '100%',
                  }}
                />
            ) : null}
          </AspectRatio> 
          {!carousel ? (
            <Box sx={{px: 2, pb: 2}}>
                {label ? (
                    <Label
                      title={label.title}
                      amount={label.amount}
                      currencyCode={label.currencyCode}
                      position={label.position}
                  />
                ) : null}
                
          </Box>
        
          ) : null}
            
    </Card>
  );
}