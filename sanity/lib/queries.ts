import { groq } from "next-sanity";
export const PRODUCTS_QUERY = groq`*[_type == "product" && defined(slug)]`;
