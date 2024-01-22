export type Money = {
    amount: string;
    currencyCode: string;
};
export type Product = {
    slug: string
    sku: string
    title: string;
    mm: string;
    ct: string;
    "DE IF-VVS": string;
    "DE VS": string;
    "FG IF-VVS": string;
    "FG VS": string;
    featuredImage: { url: string };
    priceRange: {
        maxVariantPrice: Money;
        minVariantPrice: Money;
    };
}