import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route"; // adjust path if needed
import postgres from "postgres";

// Connect to your database
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }

    // Fetch the product
    const product = await sql<{
      id: string;
      name: string;
      description: string;
      price: number;
      image_url?: string;
    }[]>`
      SELECT id, name, description, price, image_url
      FROM products
      WHERE id = ${id}
      LIMIT 1
    `;

    if (!product[0]) {
      return NextResponse.json({ error: "Invalid product ID" }, { status: 404 });
    }

    // Fetch reviews (anonymous)
const reviews = await sql<{
  id: string;
  rating: number;
  comment: string;
  userName: string;
}[]>`
  SELECT r.id, r.rating, r.comment, 'Anonymous' AS userName
  FROM reviews r
  WHERE r.product_id = ${id}
  ORDER BY r.id DESC
`;

    // Return product and reviews
    return NextResponse.json({
      product: { ...product[0], imageUrl: product[0].image_url || "" },
      reviews,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    // Get session to determine artisan
    const session = await getServerSession(authOptions);
    if (!session?.user?.name) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse request body
    const { name, description, price, image_url } = await req.json();

    if (!name || !description || !price) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Get artisan ID for this user
    const artisanResult = await sql<{ id: string }[]>`
      SELECT a.id
      FROM artisans a
      JOIN users u ON u.id = a.user_id
      WHERE u.name = ${session.user.name}
      LIMIT 1
    `;

    const artisan_id = artisanResult[0]?.id;
    if (!artisan_id) {
      return NextResponse.json({ error: "No artisan profile found" }, { status: 400 });
    }

    // Insert new product
    const result = await sql<{ id: string }[]>`
      INSERT INTO products (name, description, price, image_url, artisan_id)
      VALUES (${name}, ${description}, ${price}, ${image_url}, ${artisan_id})
      RETURNING id
    `;

    return NextResponse.json({ product: result[0] });
  } catch (err) {
    console.error("Error creating product:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, name, description, price, image_url } = await req.json();

    if (!id || !name || !description || !price) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const result = await sql<{ id: string }[]>`
      UPDATE products
      SET name = ${name},
          description = ${description},
          price = ${price},
          image_url = ${image_url}
      WHERE id = ${id}
      RETURNING id
    `;

    if (!result[0]) {
      return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
    }

    return NextResponse.json({ product: result[0] });
  } catch (err) {
    console.error("Error updating product:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
