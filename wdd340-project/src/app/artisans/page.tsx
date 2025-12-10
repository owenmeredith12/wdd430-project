import { FC } from "react";
import ArtisansClient from "../artisans/artisansClient";
import postgres from "postgres";

// PostgreSQL connection
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// Type for an artisan
export type Artisan = {
  id: string;
  name: string;
  bio: string;
  profileImageUrl: string | null;
};

// Fetch artisans from DB
const getArtisans = async (): Promise<Artisan[]> => {
  const result = await sql<Artisan[]>`
    SELECT id, name, bio
    FROM artisans
  `;
  return result;
};

const ArtisansPage = async () => {
  const artisans = await getArtisans();
  return <ArtisansClient artisans={artisans} />;
};

export default ArtisansPage;
