

export interface User {
  id: string;
  name: string;
  email: string;
  role: "buyer" | "seller" | "admin";
}

export interface SellerProfile {
  id: string;
  userId: string;
  bio?: string;
  story?: string;
  avatarUrl?: string;
  bannerUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}


export interface Product {
  id: string;
  sellerId: string;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];            
  createdAt: Date;
  updatedAt: Date;
}


export interface Review {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  comment?: string;
  createdAt: Date;
}


export interface ProductFilters {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: "newest" | "priceAsc" | "priceDesc" | "rating";
}


export interface ProductWithSeller extends Product {
  seller: SellerProfile & { user: User };
}

export interface ProductWithReviews extends Product {
  reviews: Review[];
  averageRating: number;
}

export interface SellerWithProducts extends SellerProfile {
  products: Product[];
}
