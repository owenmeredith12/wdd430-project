import postgres from 'postgres';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

// Connect to Postgres
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function changePassword(email: string, newPassword: string) {
  try {
    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user in the database
    const result = await sql`
      UPDATE users
      SET password_hash = ${hashedPassword}
      WHERE email = ${email}
      RETURNING id, email
    `;

    if (result.length === 0) {
      console.log(`No user found with email: ${email}`);
      process.exit(0);
    }

    console.log(`Password updated for user: ${result[0].email}`);
    process.exit(0);
  } catch (err) {
    console.error("Error updating password:", err);
    process.exit(1);
  }
}

// Replace these with the user's email and new password
const email = "user@example.com";
const newPassword = "NewSecurePassword123!";

changePassword(email, newPassword);
