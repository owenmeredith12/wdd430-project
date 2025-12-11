"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";

// Types
type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

type Review = {
  id: string;
  rating: number;
  userName: string;
};

export default function ProductPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const [newRating, setNewRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);

  // Fetch product and reviews
  useEffect(() => {
    if (!id) return;

    fetch(`/api/product?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.product) {
          setProduct(data.product);
          setReviews(data.reviews || []);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  // Add review handler
  const handleAddReview = async () => {
    if (!product) return;
    setSubmitting(true);

    const userId = "123"; // Replace with actual logged-in user ID

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          rating: newRating,
          userId,
        }),
      });

      const data = await res.json();
      if (data.review) {
        setReviews([...reviews, { id: data.review.id, rating: newRating, userName: "You" }]);
        setNewRating(5); // Reset
      } else if (data.error) {
        alert(data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to add review");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Invalid product ID</p>;

return (
  <div className="max-w-4xl mx-auto p-8">
    {/* Product Info */}
    <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
    <div className="relative w-full h-96 mb-4 rounded-xl overflow-hidden">
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        className="object-cover"
      />
    </div>
    <p className="mb-4">{product.description}</p>
    <p className="text-2xl font-semibold mb-6">${product.price}</p>
    <Button>Add to Cart</Button>

    {/* Reviews Section */}
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet.</p>
      ) : (
        <ul className="space-y-4">
          {reviews.map((rev) => (
            <li key={rev.id} className="border p-4 rounded-lg">
              <p className="font-medium">{rev.userName}</p>
              <p>Rating: {rev.rating} / 5</p>
            </li>
          ))}
        </ul>
      )}
    </section>

    {/* Add Review Section */}
    <section className="mt-8">
      <h3 className="text-xl font-bold mb-2">Add a Review</h3>
      <div className="flex items-center space-x-2 mb-2">
        <label>Rating:</label>
        <select
          value={newRating}
          onChange={(e) => setNewRating(Number(e.target.value))}
          className="border p-1 rounded"
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        <button onClick={handleAddReview} disabled={submitting}>
          {submitting ? "Submitting..." : "Add Review"}
        </button>
      </div>
    </section>
  </div>
);
}
