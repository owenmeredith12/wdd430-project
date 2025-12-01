import postgres from 'postgres';

export const runtime = 'nodejs'; // important for Postgres client

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listProducts() {
  const data = await sql`
    SELECT 
      p.name AS product_name,
      p.price,
      p.description,
      a.id AS artisan_id,
      u.name AS artisan_name,
      c.name AS category_name
    FROM products p
    JOIN artisans a ON p.artisan_id = a.id
    JOIN users u ON a.user_id = u.id
    JOIN categories c ON p.category_id = c.id
    ORDER BY p.name;
  `;
  return data;
}

export async function GET() {
  try {
    const products = await listProducts();
    return Response.json(products);
  } catch (error) {
    console.error(error);
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
