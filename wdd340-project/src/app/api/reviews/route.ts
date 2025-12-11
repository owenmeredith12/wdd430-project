import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

// Connect to your database
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function POST(req: NextRequest) {
  try {
    const { productId, rating, comment } = await req.json();

    // Validate input
    if (!productId || !rating || !comment || comment.trim() === "") {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Rating must be between 1 and 5" }, { status: 400 });
    }

    // Insert review
    const insertResult = await sql<{ id: string; rating: number; comment: string }[]>`
      INSERT INTO reviews (product_id, rating, comment)
      VALUES (${productId}, ${rating}, ${comment})
      RETURNING id, rating, comment
    `;

    if (!insertResult[0]) {
      return NextResponse.json({ error: "Failed to create review" }, { status: 500 });
    }

    const newReview = {
      id: insertResult[0].id,
      rating: insertResult[0].rating,
      comment: insertResult[0].comment,
      userName: "Anonymous"
    };

    return NextResponse.json({ review: newReview });
  } catch (error) {
    console.error("Error adding review:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
