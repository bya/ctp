import ctp_products from "@/lib/db/ctp_prices.json"
import slugify from "slugify"
import { Product } from "./types";

export function getProducts ({
  query,
  reverse,
  sortKey
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}) {

  return ctp_products?.map((row)=>({
    ...row,
    slug: slugify(`${row.title} ${row.mm} ${row.ct}`, { lower: true, remove: /[*+~.()'"!:@]/g }),
    sku: slugify(`ctp ${row.mm} ${row.ct}`, { lower: true, remove: /[*+~.()'"!:@]/g }),
    price_type: "weight",
    featuredImage: {
      url: "https://cdn.sanity.io/images/iaommh6z/production/d2313298c1c05f66898da7db177670a093021223-453x640.jpg"
    },
    title: `${row.title} ${row.mm} ${row.ct}`,
    priceRange: {
      maxVariantPrice: {
        amount: row["DE IF-VVS"],
        currencyCode: "USD"
      },
      minVariantPrice: {
        amount: row["FG VS"],
        currencyCode: "USD"
      }
    },
    variants: [
      {
        id: "1",
        title: "FG VS",
        availableForSale: true,
        selectedOptions: [
          {
            name: "title",
            value: "FG VS"
          }
        ],
        price: {
          amount: row["FG VS"],
          currencyCode: "USD"
        }
      },
      {
        id: "2",
        title: "FG IF-VVS",
        availableForSale: true,
        selectedOptions: [
          {
            name: "title",
            value: "FG IF-VVS"
          }
        ],
        price: {
          amount: row["FG IF-VVS"],
          currencyCode: "USD"
        }
      },
      {
        id: "3",
        title: "DE VS",
        availableForSale: true,
        selectedOptions: [
          {
            name: "title",
            value: "DE VS"
          }
        ],
        price: {
          amount: row["DE VS"],
          currencyCode: "USD"
        }
      },
      {
        id: "4",
        title: "DE IF-VVS",
        availableForSale: true,
        selectedOptions: [
          {
            name: "title",
            value: "DE IF-VVS"
          }
        ],
        price: {
          amount: row["DE IF-VVS"],
          currencyCode: "USD"
        }
      },
    ],
    options: [{
      id: 1,
      name: "color",
      values: ["FG VS", "FG IF-VVS", "DE VS", "DE IF-VVS"]
    }]
  })) || [];


}


export function getProduct (handle: string): Product | undefined {
  return getProducts({}).find((row)=>row.slug === decodeURIComponent(handle)) || undefined;
}