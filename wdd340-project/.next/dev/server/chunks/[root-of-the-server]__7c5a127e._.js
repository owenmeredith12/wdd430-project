module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/perf_hooks [external] (perf_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("perf_hooks", () => require("perf_hooks"));

module.exports = mod;
}),
"[project]/src/app/lib/data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Handcrafted Haven - Seed Data
// Similar structure to the Next.js Learn example
// Exporting plain arrays for easy importing into seeding scripts
// ------------------------------------
// Users (basic accounts)
// ------------------------------------
__turbopack_context__.s([
    "artisans",
    ()=>artisans,
    "categories",
    ()=>categories,
    "products",
    ()=>products,
    "revenue",
    ()=>revenue,
    "reviews",
    ()=>reviews,
    "users",
    ()=>users
]);
const users = [
    {
        id: 'b9c97637-aad1-4dc2-8f51-93262dc4c001',
        name: 'Olivia Hart',
        email: 'olivia@handcraftedhaven.com',
        password: 'password123'
    },
    {
        id: '0e1c61f3-1d0a-4eca-9b59-cc039bf84455',
        name: 'Mason Reed',
        email: 'mason@handcraftedhaven.com',
        password: 'password123'
    },
    {
        id: '8f7de861-2dbc-4cb0-9f49-ece2dd2c9fc2',
        name: 'Sofia Lane',
        email: 'sofia@handcraftedhaven.com',
        password: 'password123'
    }
];
const artisans = [
    {
        id: 'e6a4c1dc-ecb7-4a15-9c82-63dfbf1c1a01',
        name: 'Olivia Hart',
        user_id: users[0].id,
        bio: 'Ceramic artist crafting eco-friendly pottery and functional clay goods.',
        location: 'Portland, OR'
    },
    {
        id: '84cee934-4fb7-4550-a44c-6ed0a388c705',
        name: 'Mason Reed',
        user_id: users[1].id,
        bio: 'Woodworker creating rustic minimalist handmade furniture.',
        location: 'Nashville, TN'
    },
    {
        id: '13a71e20-fb4d-4c1c-bbcd-2a5d4ca40e7e',
        name: 'Sofia Lane',
        user_id: users[2].id,
        bio: 'Jewelry designer specializing in recycled metals & natural gemstones.',
        location: 'Santa Fe, NM'
    }
];
const categories = [
    {
        id: '99bfd0bd-b67a-4ac5-ad48-4e4b8b035301',
        name: 'Ceramics'
    },
    {
        id: 'a65fb81c-2cb3-4a2c-a4cf-847cd2d9b471',
        name: 'Woodworking'
    },
    {
        id: 'ef83c655-9109-409d-bd3d-186964c49472',
        name: 'Jewelry'
    },
    {
        id: '1276c007-c88f-4f24-9322-3d0641541c09',
        name: 'Home Decor'
    },
    {
        id: '37398741-63f4-48df-9ed9-53ab22603ab0',
        name: 'Eco-Friendly'
    }
];
// Map for convenience
const cat = {
    Ceramics: categories[0].id,
    Woodworking: categories[1].id,
    Jewelry: categories[2].id
};
const products = [
    {
        id: 'c3f0c43a-13df-4c79-a7b3-9682af142801',
        artisan_id: artisans[0].id,
        name: 'Hand-Thrown Stoneware Mug',
        description: 'A handcrafted stoneware mug with a matte glaze. Perfect for morning rituals and coffee lovers.',
        price: 32.0,
        category_id: cat.Ceramics,
        tags: [
            'ceramics',
            'mug',
            'eco-friendly'
        ],
        image_url: '/products/mug1.jpg'
    },
    {
        id: '7537fe5f-d97d-47f0-9da5-ad1527bc8de2',
        artisan_id: artisans[1].id,
        name: 'Rustic Walnut Coffee Table',
        description: 'Minimalist coffee table made from sustainably sourced walnut wood with a natural oil finish.',
        price: 420.0,
        category_id: cat.Woodworking,
        tags: [
            'wood',
            'furniture',
            'handmade'
        ],
        image_url: '/products/table1.jpg'
    },
    {
        id: 'f6641684-a3fc-4e1e-981b-a5cdff22bfa7',
        artisan_id: artisans[2].id,
        name: 'Recycled Silver Moon Pendant',
        description: 'Elegant pendant crafted from recycled sterling silver. A perfect sustainable jewelry piece.',
        price: 68.0,
        category_id: cat.Jewelry,
        tags: [
            'silver',
            'jewelry',
            'eco-friendly'
        ],
        image_url: '/products/pendant1.jpg'
    }
];
const reviews = [
    {
        id: 'bd07db11-c831-4e16-91ae-c3eb78f4fe79',
        product_id: products[0].id,
        user_id: users[1].id,
        rating: 5,
        comment: 'Beautiful craftsmanship — my new favorite mug!'
    },
    {
        id: 'c9469f7b-32d7-4641-9a7d-d8d663e93810',
        product_id: products[1].id,
        user_id: users[2].id,
        rating: 4,
        comment: 'Stunning table. High quality but smaller than expected.'
    },
    {
        id: '242bb917-eb40-4c93-889d-bf5b4fc305a0',
        product_id: products[2].id,
        user_id: users[0].id,
        rating: 5,
        comment: 'Delicate, beautiful, and sustainably made — love it!'
    }
];
const revenue = [
    {
        month: 'Jan',
        revenue: 2100
    },
    {
        month: 'Feb',
        revenue: 1800
    },
    {
        month: 'Mar',
        revenue: 2300
    },
    {
        month: 'Apr',
        revenue: 2500
    },
    {
        month: 'May',
        revenue: 3100
    },
    {
        month: 'Jun',
        revenue: 3500
    },
    {
        month: 'Jul',
        revenue: 3700
    },
    {
        month: 'Aug',
        revenue: 3900
    },
    {
        month: 'Sep',
        revenue: 2800
    },
    {
        month: 'Oct',
        revenue: 3000
    },
    {
        month: 'Nov',
        revenue: 3400
    },
    {
        month: 'Dec',
        revenue: 5100
    }
];
}),
"[project]/src/app/seed/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postgres$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/postgres/src/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/data.ts [app-route] (ecmascript)"); // adjust path as needed
;
;
;
const runtime = 'nodejs';
const sql = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postgres$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(process.env.POSTGRES_URL, {
    ssl: 'require'
});
/* --------------------------------------------------------
   USERS
-------------------------------------------------------- */ async function seedUsers(sqlInstance) {
    await sqlInstance`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sqlInstance`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    )
  `;
    for (const user of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"]){
        const hashed = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(user.password, 10);
        await sqlInstance`
      INSERT INTO users (id, name, email, password)
      VALUES (${user.id}, ${user.name}, ${user.email}, ${hashed})
      ON CONFLICT (id) DO NOTHING
    `;
    }
}
/* --------------------------------------------------------
   ARTISANS
-------------------------------------------------------- */ async function seedArtisans(sqlInstance) {
    await sqlInstance`
    CREATE TABLE IF NOT EXISTS artisans (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      user_id UUID NOT NULL REFERENCES users(id),
        name VARCHAR(35) NOT NULL,
      bio TEXT NOT NULL,
      location VARCHAR(255) NOT NULL
    )
  `;
    for (const artisan of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["artisans"]){
        await sqlInstance`
      INSERT INTO artisans (id, user_id, name, bio, location)
      VALUES (${artisan.id},  ${artisan.user_id}, ${artisan.name}, ${artisan.bio}, ${artisan.location})
      ON CONFLICT (id) DO NOTHING
    `;
    }
}
/* --------------------------------------------------------
   CATEGORIES
-------------------------------------------------------- */ async function seedCategories(sqlInstance) {
    await sqlInstance`
    CREATE TABLE IF NOT EXISTS categories (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(255) NOT NULL UNIQUE
    )
  `;
    for (const cat of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["categories"]){
        await sqlInstance`
      INSERT INTO categories (id, name)
      VALUES (${cat.id}, ${cat.name})
      ON CONFLICT (id) DO NOTHING
    `;
    }
}
/* --------------------------------------------------------
   PRODUCTS
-------------------------------------------------------- */ async function seedProducts(sqlInstance) {
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
    for (const product of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["products"]){
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
-------------------------------------------------------- */ async function seedReviews(sqlInstance) {
    await sqlInstance`
    CREATE TABLE IF NOT EXISTS reviews (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      product_id UUID NOT NULL REFERENCES products(id),
      user_id UUID NOT NULL REFERENCES users(id),
      rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
      comment TEXT NOT NULL
    )
  `;
    for (const rev of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["reviews"]){
        await sqlInstance`
      INSERT INTO reviews (id, product_id, user_id, rating, comment)
      VALUES (${rev.id}, ${rev.product_id}, ${rev.user_id}, ${rev.rating}, ${rev.comment})
      ON CONFLICT (id) DO NOTHING
    `;
    }
}
/* --------------------------------------------------------
   REVENUE
-------------------------------------------------------- */ async function seedRevenue(sqlInstance) {
    await sqlInstance`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    )
  `;
    for (const r of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revenue"]){
        await sqlInstance`
      INSERT INTO revenue (month, revenue)
      VALUES (${r.month}, ${r.revenue})
      ON CONFLICT (month) DO NOTHING
    `;
    }
}
async function GET() {
    try {
        // Run everything in a single transaction
        await sql.begin(async (tx)=>{
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
        return Response.json({
            message: 'Handcrafted Haven database seeded successfully!'
        });
    } catch (error) {
        console.error('Seeding error:', error);
        return Response.json({
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7c5a127e._.js.map