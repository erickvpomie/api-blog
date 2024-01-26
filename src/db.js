import { createClient } from "@libsql/client";
import 'dotenv/config';

// Connect to a online database
export const client = createClient({
    url: process.env.DATABASE_URL ?? '',
    authToken: process.env.DATABASE_TOKEN ?? ''
});


// If you want to try SQLite in local environment, you can use this code:
// export const client = createClient({
//   url: "file:src/db/blog-db.sqlite"
// })