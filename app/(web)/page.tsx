import Sheet from '@mui/joy/Sheet';
import HeroSide01 from '@/blocks/HeroSide';




export default function Home() {
  return (
    <Sheet
      sx={{
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      
        
        <HeroSide01 />
      
   
    </Sheet>
  
  );
}
