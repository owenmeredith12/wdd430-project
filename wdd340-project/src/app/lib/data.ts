// Handcrafted Haven - Seed Data
// Similar structure to the Next.js Learn example
// Exporting plain arrays for easy importing into seeding scripts

// ------------------------------------
// Users (basic accounts)
// ------------------------------------
export const users = [
  {
    id: 'b9c97637-aad1-4dc2-8f51-93262dc4c001',
    name: 'Olivia Hart',
    email: 'olivia@handcraftedhaven.com',
    password: 'password123',
  },
  {
    id: '0e1c61f3-1d0a-4eca-9b59-cc039bf84455',
    name: 'Mason Reed',
    email: 'mason@handcraftedhaven.com',
    password: 'password123',
  },
  {
    id: '8f7de861-2dbc-4cb0-9f49-ece2dd2c9fc2',
    name: 'Sofia Lane',
    email: 'sofia@handcraftedhaven.com',
    password: 'password123',
  },
];

// ------------------------------------
// Artisans (tied to users)
// ------------------------------------
export const artisans = [
  {
    id: 'e6a4c1dc-ecb7-4a15-9c82-63dfbf1c1a01',
    user_id: users[0].id,
    bio: 'Ceramic artist crafting eco-friendly pottery and functional clay goods.',
    location: 'Portland, OR',
  },
  {
    id: '84cee934-4fb7-4550-a44c-6ed0a388c705',
    user_id: users[1].id,
    bio: 'Woodworker creating rustic minimalist handmade furniture.',
    location: 'Nashville, TN',
  },
  {
    id: '13a71e20-fb4d-4c1c-bbcd-2a5d4ca40e7e',
    user_id: users[2].id,
    bio: 'Jewelry designer specializing in recycled metals & natural gemstones.',
    location: 'Santa Fe, NM',
  },
];

// ------------------------------------
// Categories
// ------------------------------------
export const categories = [
  { id: '99bfd0bd-b67a-4ac5-ad48-4e4b8b035301', name: 'Ceramics' },
  { id: 'a65fb81c-2cb3-4a2c-a4cf-847cd2d9b471', name: 'Woodworking' },
  { id: 'ef83c655-9109-409d-bd3d-186964c49472', name: 'Jewelry' },
  { id: '1276c007-c88f-4f24-9322-3d0641541c09', name: 'Home Decor' },
  { id: '37398741-63f4-48df-9ed9-53ab22603ab0', name: 'Eco-Friendly' },
];

// Map for convenience
const cat = {
  Ceramics: categories[0].id,
  Woodworking: categories[1].id,
  Jewelry: categories[2].id,
};

// ------------------------------------
// Products
// ------------------------------------
export const products = [
  {
    id: 'c3f0c43a-13df-4c79-a7b3-9682af142801',
    artisan_id: artisans[0].id,
    name: 'Hand-Thrown Stoneware Mug',
    description:
      'A handcrafted stoneware mug with a matte glaze. Perfect for morning rituals and coffee lovers.',
    price: 32.0,
    category_id: cat.Ceramics,
    tags: ['ceramics', 'mug', 'eco-friendly'],
    image_url: '/products/mug1.jpg',
  },
  {
    id: '7537fe5f-d97d-47f0-9da5-ad1527bc8de2',
    artisan_id: artisans[1].id,
    name: 'Rustic Walnut Coffee Table',
    description:
      'Minimalist coffee table made from sustainably sourced walnut wood with a natural oil finish.',
    price: 420.0,
    category_id: cat.Woodworking,
    tags: ['wood', 'furniture', 'handmade'],
    image_url: '/products/table1.jpg',
  },
  {
    id: 'f6641684-a3fc-4e1e-981b-a5cdff22bfa7',
    artisan_id: artisans[2].id,
    name: 'Recycled Silver Moon Pendant',
    description:
      'Elegant pendant crafted from recycled sterling silver. A perfect sustainable jewelry piece.',
    price: 68.0,
    category_id: cat.Jewelry,
    tags: ['silver', 'jewelry', 'eco-friendly'],
    image_url: '/products/pendant1.jpg',
  },
];

// ------------------------------------
// Reviews
// ------------------------------------
export const reviews = [
  {
    id: 'bd07db11-c831-4e16-91ae-c3eb78f4fe79',
    product_id: products[0].id,
    user_id: users[1].id,
    rating: 5,
    comment: 'Beautiful craftsmanship — my new favorite mug!',
  },
  {
    id: 'c9469f7b-32d7-4641-9a7d-d8d663e93810',
    product_id: products[1].id,
    user_id: users[2].id,
    rating: 4,
    comment: 'Stunning table. High quality but smaller than expected.',
  },
  {
    id: '242bb917-eb40-4c93-889d-bf5b4fc305a0',
    product_id: products[2].id,
    user_id: users[0].id,
    rating: 5,
    comment: 'Delicate, beautiful, and sustainably made — love it!',
  },
];

// ------------------------------------
// Revenue (example analytics)
// ------------------------------------
export const revenue = [
  { month: 'Jan', revenue: 2100 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2300 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 3100 },
  { month: 'Jun', revenue: 3500 },
  { month: 'Jul', revenue: 3700 },
  { month: 'Aug', revenue: 3900 },
  { month: 'Sep', revenue: 2800 },
  { month: 'Oct', revenue: 3000 },
  { month: 'Nov', revenue: 3400 },
  { month: 'Dec', revenue: 5100 },
];
