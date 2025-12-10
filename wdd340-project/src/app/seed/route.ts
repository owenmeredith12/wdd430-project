import bcrypt from 'bcryptjs';
import postgres from 'postgres';
import {
  users,
  artisans,
  categories,
  products,
  reviews,
  revenue,
} from '../lib/data'; // adjust path as needed

export const runtime = 'nodejs';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

/* --------------------------------------------------------
   USERS
-------------------------------------------------------- */
async function seedUsers(sqlInstance: any) {
  await sqlInstance`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sqlInstance`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    )
  `;

  for (const user of users) {
    const hashed = await bcrypt.hash(user.password, 10);
    await sqlInstance`
      INSERT INTO users (id, name, email, password)
      VALUES (${user.id}, ${user.name}, ${user.email}, ${hashed})
      ON CONFLICT (id) DO NOTHING
    `;
  }
}

/* --------------------------------------------------------
   ARTISANS
-------------------------------------------------------- */
async function seedArtisans(sqlInstance: any) {
  await sqlInstance`
    CREATE TABLE IF NOT EXISTS artisans (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      user_id UUID NOT NULL REFERENCES users(id),
        name VARCHAR(35) NOT NULL,
      bio TEXT NOT NULL,
      location VARCHAR(255) NOT NULL
    )
  `;

  for (const artisan of artisans) {
    await sqlInstance`
      INSERT INTO artisans (id, user_id, name, bio, location)
      VALUES (${artisan.id},  ${artisan.user_id}, ${artisan.name}, ${artisan.bio}, ${artisan.location})
      ON CONFLICT (id) DO NOTHING
    `;
  }
}

/* --------------------------------------------------------
   CATEGORIES
-------------------------------------------------------- */
async function seedCategories(sqlInstance: any) {
  await sqlInstance`
    CREATE TABLE IF NOT EXISTS categories (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(255) NOT NULL UNIQUE
    )
  `;

  for (const cat of categories) {
    await sqlInstance`
      INSERT INTO categories (id, name)
      VALUES (${cat.id}, ${cat.name})
      ON CONFLICT (id) DO NOTHING
    `;
  }
}

/* --------------------------------------------------------
   PRODUCTS
-------------------------------------------------------- */
async function seedProducts(sqlInstance: any) {
  await sqlInstance`
    CREATE TABLE IF NOT EXISTS products (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      artisan_id UUID NOT NULL REFERENCES artisans(id),
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      price NUMERIC(10,2) NOT NULL,
      category_id UUID NOT NULL REFERENCES categories(id),
      tags TEXT[],
      image_url TEXT
    )
  `;

  for (const product of products) {
    await sqlInstance`
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
      ON CONFLICT (id) DO NOTHING
    `;
  }
}

/* --------------------------------------------------------
   REVIEWS
-------------------------------------------------------- */
async function seedReviews(sqlInstance: any) {
  await sqlInstance`
    CREATE TABLE IF NOT EXISTS reviews (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      product_id UUID NOT NULL REFERENCES products(id),
      user_id UUID NOT NULL REFERENCES users(id),
      rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
      comment TEXT NOT NULL
    )
  `;

  for (const rev of reviews) {
    await sqlInstance`
      INSERT INTO reviews (id, product_id, user_id, rating, comment)
      VALUES (${rev.id}, ${rev.product_id}, ${rev.user_id}, ${rev.rating}, ${rev.comment})
      ON CONFLICT (id) DO NOTHING
    `;
  }
}

/* --------------------------------------------------------
   REVENUE
-------------------------------------------------------- */
async function seedRevenue(sqlInstance: any) {
  await sqlInstance`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    )
  `;

  for (const r of revenue) {
    await sqlInstance`
      INSERT INTO revenue (month, revenue)
      VALUES (${r.month}, ${r.revenue})
      ON CONFLICT (month) DO NOTHING
    `;
  }
}

/* --------------------------------------------------------
   MAIN GET ROUTE
-------------------------------------------------------- */
export async function GET() {
  try {
    // Run everything in a single transaction
    await sql.begin(async (tx) => {
      console.log('Seeding users...');
      await seedUsers(tx);

      console.log('Seeding artisans...');
      await seedArtisans(tx);

      console.log('Seeding categories...');
      await seedCategories(tx);

      console.log('Seeding products...');
      await seedProducts(tx);

      console.log('Seeding reviews...');
      await seedReviews(tx);

      console.log('Seeding revenue...');
      await seedRevenue(tx);
    });

    console.log('Database seeded successfully!');
    return Response.json({ message: 'Handcrafted Haven database seeded successfully!' });
  } catch (error) {
    console.error('Seeding error:', error);
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
