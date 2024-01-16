import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';
import HeroSide01 from '@/blocks/HeroSide';
import Typography from '@mui/joy/Typography';

export default function Register() {
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
      
        
        <Typography level="h1" color="primary" fontSize="lg" fontWeight="xl">Register</Typography>
      
   
    </Sheet>
  
  );
}
