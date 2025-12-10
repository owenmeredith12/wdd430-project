import { FC } from "react";
import MarketplaceClient from "./markeplaceClient";
import postgres from "postgres";

// PostgreSQL connection
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// Type for a listing
export type Listing = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
};

// Fetch listings from DB
const getListings = async (): Promise<Listing[]> => {
  const result = await sql<Listing[]>`
    SELECT id, name AS title, price, image_url AS "imageUrl"
    FROM products
  `;
  return result;
};

const MarketplacePage = async () => {
  const listings = await getListings();

  return <MarketplaceClient listings={listings} />;
};

export default MarketplacePage;
