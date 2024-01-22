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
    variants: ProductVariant[];
    options: ProductOption[];


}

export type ProductOption = {
    id: string;
    name: string;
    values: string[];
};

export type ProductVariant = {
    id: string;
    title: string;
    availableForSale: boolean;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    price: Money;
};