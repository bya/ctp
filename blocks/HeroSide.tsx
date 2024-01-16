import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '@/components/two-side-layout';
import NextLink from "next/link"
import Box from '@mui/joy/Box';



export default function HeroSide01() {
  return (
    <TwoSidedLayout>
      <Typography level="h1" color="primary" fontSize="lg" fontWeight="xl">
        Cut to perfection
      </Typography>
      <Typography
        level="h3"
        fontWeight="xl"
        lineHeight="xs"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Passion for perfection
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        We precision cut our diamonds and colour stones to achieve maximum brilliance and 
        beauty, making our gems the number one choice for jewelry of the highest standard. 
      </Typography>
      <Button component={NextLink} href="/register" size="lg" endDecorator={<ArrowForward fontSize="large" />}>
        Please register
      </Button>

        <Typography>
          Already have an account? <Link fontWeight="lg" component={NextLink} href={"/login"}>Login here</Link> 
        </Typography>
        


    </TwoSidedLayout>
  );
}
