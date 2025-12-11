import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";
import postgres from "postgres";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

// PostgreSQL connection
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url?: string | null;
};

export default async function AccountPage() {
  // Get the user session
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/login");
    return null; // ensure TS knows we return nothing if redirecting
  }

  const userName = session.user.name || session.user.email || "";

  // Find the artisan associated with this username
  const artisanResult = await sql<{ id: string }[]>`
    SELECT a.id
    FROM artisans a
    JOIN users u ON u.id = a.user_id
    WHERE u.name = ${userName}
    LIMIT 1
  `;

  const artisanId = artisanResult[0]?.id;

  if (!artisanId) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">Account Page</h1>
        <p className="mt-4 text-lg">No artisan profile found for this user.</p>
      </div>
    );
  }

  // Fetch products for this artisan
  const products = await sql<Product[]>`
    SELECT id, name, description, price, image_url
    FROM products
    WHERE artisan_id = ${artisanId}
  `;

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Products</h1>
        <Link href="/product/new">
          <Button className="rounded-xl">Add Product</Button>
        </Link>
      </div>

      <p className="mb-8 text-lg">Welcome, {userName}</p>

      {products.length === 0 && <p className="text-gray-500">You have no products yet.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="rounded-2xl shadow-sm hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-xl font-semibold truncate">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {product.image_url && (
                <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                  <Image src={product.image_url} alt={product.name} fill className="object-cover" />
                </div>
              )}
              <p className="text-gray-700 mb-4 line-clamp-3">{product.description}</p>
              <p className="text-lg font-medium mb-4">${product.price}</p>
              <Link href={`/product/update?id=${product.id}`}>
                <Button className="w-full rounded-xl">Edit Product</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
