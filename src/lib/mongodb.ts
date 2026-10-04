import { MongoClient, type Collection } from "mongodb";

type ClickDoc = { _id: string; count: number };

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "linknamu";

const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

function getClient(): Promise<MongoClient> | null {
  if (!uri) return null;
  if (!globalForMongo._mongoClientPromise) {
    // 연결에 실패하면 캐시를 비워 다음 요청에서 다시 시도한다.
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect().catch((err) => {
      globalForMongo._mongoClientPromise = undefined;
      throw err;
    });
  }
  return globalForMongo._mongoClientPromise;
}

// MONGODB_URI가 없으면 null을 반환해 DB 없이도 페이지가 동작하도록 한다.
export async function getClicksCollection(): Promise<Collection<ClickDoc> | null> {
  const clientPromise = getClient();
  if (!clientPromise) return null;
  const client = await clientPromise;
  return client.db(dbName).collection<ClickDoc>("clicks");
}
