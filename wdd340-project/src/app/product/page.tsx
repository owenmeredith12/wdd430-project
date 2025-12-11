"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";

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
  comment: string;
};

export default function ProductPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  // Add Review state
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/product?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.product);
        setReviews(data.reviews || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleAddReview = async () => {
    if (!product || !newComment.trim()) {
      alert("Please enter a comment");
      return;
    }
    setSubmitting(true);

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          rating: newRating,
          comment: newComment.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.review) {
        setReviews([...reviews, data.review]);
        setNewRating(5);
        setNewComment("");
      } else {
        alert(data.error || "Failed to add review");
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
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

      <div className="relative w-full h-96 mb-4 rounded-xl overflow-hidden">
        <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
      </div>

      <p className="mb-4">{product.description}</p>
      <p className="text-2xl font-semibold mb-6">${product.price}</p>
      <Button>Add to Cart</Button>

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
          {rev.comment && rev.comment.trim() !== "" && (
            <p className="mt-1 text-gray-700">{rev.comment}</p>
          )}
        </li>
      ))}
    </ul>
  )}
</section>


      <section className="mt-8">
        <h3 className="text-xl font-bold mb-2">Add a Review</h3>
        <div className="flex flex-col space-y-2 mb-2">
          <div className="flex items-center space-x-2">
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
          </div>
          <div>
            <label className="block mb-1 font-medium">Comment:</label>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full border rounded px-3 py-2"
              rows={3}
              required
            />
          </div>
          <Button onClick={handleAddReview} disabled={submitting}>
            {submitting ? "Submitting..." : "Add Review"}
          </Button>
        </div>
      </section>
    </div>
  );
}
