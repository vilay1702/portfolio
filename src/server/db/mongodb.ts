import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI || process.env.MONGO_URI;
const dbName = process.env.MONGODB_DB;

if (!uri) {
  throw new Error(
    "MONGODB_URI (or MONGO_URI) is not set. Add it to .env.local (see .env.local.example)."
  );
}

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: false,
    deprecationErrors: true,
  },
};

let clientPromise: Promise<MongoClient>;

// In development, reuse a cached client across hot reloads so we don't exhaust
// the connection pool. In production, a fresh promise per serverless instance is fine.
if (process.env.NODE_ENV === "development") {
  const g = globalThis as unknown as {
    _mongoClientPromise?: Promise<MongoClient>;
  };
  if (!g._mongoClientPromise) {
    g._mongoClientPromise = new MongoClient(uri, options).connect();
  }
  clientPromise = g._mongoClientPromise;
} else {
  clientPromise = new MongoClient(uri, options).connect();
}

export async function getDb() {
  const client = await clientPromise;
  // If MONGODB_DB is set, use it; otherwise fall back to the database name
  // embedded in the URI (e.g., mongodb://host/<dbname>).
  return dbName ? client.db(dbName) : client.db();
}

export default clientPromise;
