import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import * as functions from "firebase-functions";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);

exports.app = functions.https.onRequest(app);