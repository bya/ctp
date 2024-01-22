import { GridTileImage } from '@/components/grid/tile';
import { Product } from '@/lib/ctp/types';
import Link from 'next/link';
import Grid from "@mui/joy/Grid";


export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>

      {products.map((product) => (
          <Grid xs={6} md={4} key={product.slug}>
            <Link href={`/product/${product.slug}`} style={{textDecoration: "none"}}>
                <GridTileImage
                    alt={product.title}
                    label={{
                        title: product.title,
                        amount: product.priceRange.maxVariantPrice.amount,
                        currencyCode: "USD"
                    }}
                    src={product.featuredImage?.url}
                    fill
                    sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
               </Link>  
        </Grid>
      ))}
    </Grid>
  );
}