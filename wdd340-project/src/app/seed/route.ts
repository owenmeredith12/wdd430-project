import bcrypt from 'bcryptjs';
import postgres from 'postgres';
import {
  users,
  artisans,
  categories,
  products,
  reviews,
  revenue,
} from '../lib/data'; // <-- adjust path as needed

// Connect to Vercel Postgres
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

/* --------------------------------------------------------
   USERS
-------------------------------------------------------- */
async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);

      return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

/* --------------------------------------------------------
   ARTISANS
-------------------------------------------------------- */
async function seedArtisans() {
  await sql`
    CREATE TABLE IF NOT EXISTS artisans (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      user_id UUID NOT NULL REFERENCES users(id),
      bio TEXT NOT NULL,
      location VARCHAR(255) NOT NULL
    );
  `;

  const inserted = await Promise.all(
    artisans.map((artisan) =>
      sql`
        INSERT INTO artisans (id, user_id, bio, location)
        VALUES (${artisan.id}, ${artisan.user_id}, ${artisan.bio}, ${artisan.location})
        ON CONFLICT (id) DO NOTHING;
      `
    ),
  );

  return inserted;
}

/* --------------------------------------------------------
   CATEGORIES
-------------------------------------------------------- */
async function seedCategories() {
  await sql`
    CREATE TABLE IF NOT EXISTS categories (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(255) NOT NULL UNIQUE
    );
  `;

  const inserted = await Promise.all(
    categories.map((cat) =>
      sql`
        INSERT INTO categories (id, name)
        VALUES (${cat.id}, ${cat.name})
        ON CONFLICT (id) DO NOTHING;
      `
    ),
  );

  return inserted;
}

/* --------------------------------------------------------
   PRODUCTS
-------------------------------------------------------- */
async function seedProducts() {
  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      artisan_id UUID NOT NULL REFERENCES artisans(id),
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      price NUMERIC(10, 2) NOT NULL,
      category_id UUID NOT NULL REFERENCES categories(id),
      tags TEXT[],
      image_url TEXT
    );
  `;

  const inserted = await Promise.all(
    products.map((product) =>
      sql`
        INSERT INTO products (id, artisan_id, name, description, price, category_id, tags, image_url)
        VALUES (
          ${product.id},
          ${product.artisan_id},
          ${product.name},
          ${product.description},
          ${product.price},
          ${product.category_id},
          ${product.tags},
          ${product.image_url}
        )
        ON CONFLICT (id) DO NOTHING;
      `
    ),
  );

  return inserted;
}

/* --------------------------------------------------------
   REVIEWS
-------------------------------------------------------- */
async function seedReviews() {
  await sql`
    CREATE TABLE IF NOT EXISTS reviews (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      product_id UUID NOT NULL REFERENCES products(id),
      user_id UUID NOT NULL REFERENCES users(id),
      rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
      comment TEXT NOT NULL
    );
  `;

  const inserted = await Promise.all(
    reviews.map((rev) =>
      sql`
        INSERT INTO reviews (id, product_id, user_id, rating, comment)
        VALUES (${rev.id}, ${rev.product_id}, ${rev.user_id}, ${rev.rating}, ${rev.comment})
        ON CONFLICT (id) DO NOTHING;
      `
    ),
  );

  return inserted;
}

/* --------------------------------------------------------
   REVENUE
-------------------------------------------------------- */
async function seedRevenue() {
  await sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `;

  const inserted = await Promise.all(
    revenue.map((r) =>
      sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${r.month}, ${r.revenue})
        ON CONFLICT (month) DO NOTHING;
      `
    ),
  );

  return inserted;
}

/* --------------------------------------------------------
   MAIN GET ROUTE
-------------------------------------------------------- */
export async function GET() {
  try {
    await sql.begin((sql) => [
      seedUsers(),
      seedArtisans(),
      seedCategories(),
      seedProducts(),
      seedReviews(),
      seedRevenue(),
    ]);

    return Response.json({ message: 'Handcrafted Haven database seeded successfully!' });
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
