import { getProducts } from "@/lib/ctp";
import { defaultSort, sorting } from '@/lib/constants';
import Container from "@mui/joy/Container";
import ProductGridItems from "@/components/layout/product-grid-items";


export const runtime = "edge"

export const metadata = {
    title: "Search",
    description: "Search for ctp products",
}


export default async function SearchPage({
    searchParams
}: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {

    const { sort, q: searchValue } = searchParams as { [key: string]: string };
    const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

    const products = getProducts({ sortKey, reverse, query: searchValue });
    const resultsText = products.length > 1 ? 'results' : 'result';



    return (
        <>
            {products.length > 0 ? (
                <Container maxWidth={false} sx={{py: 3}}>
                    <ProductGridItems products={products} />
                </Container>
            ) : null}
        </>
    )





}