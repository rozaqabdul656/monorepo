import admin from 'firebase-admin';
import * as dotenv from "dotenv";

dotenv.config();
const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT || "{}") as admin.ServiceAccount;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

const db = admin.firestore();

export { admin, db };
