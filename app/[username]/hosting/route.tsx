import { NextRequest, NextResponse } from "next/server";
import { createKysely } from "@vercel/postgres-kysely";
import { Channels, DB } from "@/lib/db";
import { sql } from "kysely";

export const maxDuration = 300;

export const dynamic = "force-dynamic";

const db = createKysely<DB>();

export async function GET(
  req: Request,
  { params }: { params: Promise<{ username: string }> }
) {
  try {
    const { username } = await params;
    const channels = await sql<
      Channels[]
    >`SELECT * FROM channels d where jsonb_path_query_array(d.hosts, '$.username') ? ${username}`.execute(
      db
    );

    return NextResponse.json({ channels: channels.rows });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ err }, { status: 500 });
  }
}
