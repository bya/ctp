import { getProduct } from "@/lib/ctp";
import Container from "@mui/joy/Container";
import Grid from "@mui/joy/Grid";
import { notFound } from "next/navigation";
import Image from 'next/image';
import Box from "@mui/joy/Box";
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import { ProductDescription } from "@/components/product/product-description";

export const runtime = 'edge';

export default async function ProductPage({ params }: { params: { handle: string } }) {
    const product = getProduct(params.handle);
    if (!product) return notFound();

    
    
    return (
        <Container maxWidth={false} sx={{ py: 3 }}>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ width: '100%' }}
            >
                <Grid xs={12} md={6}>
                    <Card variant="outlined" sx={{
                        //minHeight: '50vh',
                        borderRadius: 0,
                        border: 0,
                        p: 0,
                        gap: 0,
                    }}>
                        <AspectRatio ratio="2/3" objectFit="cover">
                            <Image
                                fill
                                sizes="(min-width: 1024px) 66vw, 100vw"
                                alt={`Picture of ${product.title}` as string}
                                src={product.featuredImage.url as string}
                                priority={true}
                            />
                        </AspectRatio>
                    </Card>

                </Grid>
                <Grid xs={12} md={6}>
                    <ProductDescription product={product} />
                </Grid>
            </Grid>

        </Container>

    )

}