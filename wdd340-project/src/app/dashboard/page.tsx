// app/dashboard/page.tsx
import postgres from 'postgres';

// Connect to your Vercel Postgres
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function getDashboardData() {
  // Count users
  const usersCount = await sql`SELECT COUNT(*) AS count FROM users`;
  const artisansCount = await sql`SELECT COUNT(*) AS count FROM artisans`;
  const productsCount = await sql`SELECT COUNT(*) AS count FROM products`;
  const reviewsCount = await sql`SELECT COUNT(*) AS count FROM reviews`;

  // Latest 5 products
  const latestProducts = await sql`
    SELECT p.id, p.name, p.price AS artisan_name
    FROM products p
    JOIN artisans a ON p.artisan_id = a.id
    ORDER BY p.id DESC
    LIMIT 5
  `;

  // Revenue by month
  const monthlyRevenue = await sql`SELECT * FROM revenue ORDER BY month`;

  return { usersCount, artisansCount, productsCount, reviewsCount, latestProducts, monthlyRevenue };
}

export default async function DashboardPage() {
  const { usersCount, artisansCount, productsCount, reviewsCount, latestProducts, monthlyRevenue } =
    await getDashboardData();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Handcrafted Haven Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-semibold">Users</h2>
          <p className="text-2xl">{usersCount[0].count}</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-semibold">Artisans</h2>
          <p className="text-2xl">{artisansCount[0].count}</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-semibold">Products</h2>
          <p className="text-2xl">{productsCount[0].count}</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-semibold">Reviews</h2>
          <p className="text-2xl">{reviewsCount[0].count}</p>
        </div>
      </div>

      {/* Latest Products */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Latest Products</h2>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Product</th>
              <th className="border p-2">Artisan</th>
              <th className="border p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {latestProducts.map((p) => (
              <tr key={p.id}>
                <td className="border p-2">{p.name}</td>
                <td className="border p-2">{p.artisan_name}</td>
                <td className="border p-2">${p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Revenue chart (simple table) */}
      <div>
        <h2 className="text-xl font-bold mb-2">Monthly Revenue</h2>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Month</th>
              <th className="border p-2">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {monthlyRevenue.map((r) => (
              <tr key={r.month}>
                <td className="border p-2">{r.month}</td>
                <td className="border p-2">${r.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
