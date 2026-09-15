import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function GET() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS dictionary (
        id SERIAL PRIMARY KEY,
        singular VARCHAR(255) NOT NULL,
        traducao VARCHAR(500) NOT NULL,
        classe VARCHAR(100),
        plural VARCHAR(255),
        pronuncia VARCHAR(255),
        notas TEXT,
        ambiente VARCHAR(50),
        is_verbo BOOLEAN DEFAULT FALSE,
        s_norm VARCHAR(255),
        t_norm VARCHAR(500),
        c_norm VARCHAR(100),
        traducoes_array TEXT[]
      );
    `);
    return NextResponse.json({ message: 'Tabela criada com sucesso!' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    client.release();
  }
}