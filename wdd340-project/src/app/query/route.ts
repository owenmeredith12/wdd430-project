import postgres from 'postgres';

export const runtime = 'nodejs'; // important for Postgres client

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listUsers() {
  const data = await sql`
    SELECT
      u.id AS user_id,
      u.name AS user_name,
      u.email
    FROM users u
  `;
  return data;
}


export async function GET() {
  try {
    const users = await listUsers();
    return Response.json(users);
  } catch (error) {
    console.error(error);
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
