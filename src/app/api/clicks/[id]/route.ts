import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

export async function POST(
  _request: Request,
  { params }: { params: { id: string } },
) {
  if (!links.some((link) => link.id === params.id)) {
    return NextResponse.json({ error: "Unknown link" }, { status: 404 });
  }

  const collection = await getClicksCollection();
  if (!collection) {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }

  const result = await collection.findOneAndUpdate(
    { _id: params.id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );
  return NextResponse.json({ id: params.id, count: result?.count ?? 1 });
}
