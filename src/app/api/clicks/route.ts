import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET() {
  const collection = await getClicksCollection();
  if (!collection) return NextResponse.json({});

  const docs = await collection.find().toArray();
  const counts = Object.fromEntries(docs.map((d) => [d._id, d.count]));
  return NextResponse.json(counts);
}
