"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../../components/ui/button";

export const dynamic = 'force-dynamic';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url?: string;
};

export default function EditProductPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [product, setProduct] = useState<Product | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Fetch existing product data
  useEffect(() => {
    if (!id) return;

    fetch(`/api/product?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.product) {
          setProduct(data.product);
          setName(data.product.name);
          setDescription(data.product.description);
          setPrice(data.product.price.toString());
          setImageUrl(data.product.imageUrl || "");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    setSubmitting(true);

    try {
      const res = await fetch("/api/product", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: product.id,
          name,
          description,
          price: parseFloat(price),
          image_url: imageUrl,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Product updated successfully!");
        router.push("/account"); // redirect back to account page
      } else {
        alert(data.error || "Failed to update product");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating product");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Edit Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded px-3 py-2"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <Button type="submit" disabled={submitting}>
          {submitting ? "Updating..." : "Update Product"}
        </Button>
      </form>
    </div>
  );
}
