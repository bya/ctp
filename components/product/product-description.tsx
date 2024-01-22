"use client"
import { Product } from "@/lib/ctp/types";
import Typography from "@mui/joy/Typography";
import Price from "../price";
import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import Box from "@mui/joy/Box";

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
    ...theme.typography['body-sm'],
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
  }));



export function ProductDescription({ product }: { product: Product }) {

    return (
        <Item>
            <Typography level="h1" sx={{ mb: 2 }}>
                {product.title}
            </Typography>
            <Box sx={{ mb: 2 }}>
                <Price
                    amount={product.priceRange.maxVariantPrice.amount}
                    currencyCode={product.priceRange.maxVariantPrice.currencyCode}
                />
            </Box>
        </Item>
    )
}