import { RequestHandler } from "express";
import { db } from "../config/firebase";
import { User, getUserObject } from "../entities/user";

// Update User Data
export const updateUserData:RequestHandler = async(req, res, next):  Promise<any> => {
  const { name, email, age }: Partial<User> = req.body;
  const userId: string = (req as any).userId;

  if (!name || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await db.collection("USERS").doc(userId).set({ name, email, age }, { merge: true });
    return res.json({ message: "User data updated successfully" });
  } catch (error: any) {
    console.error('Error updating user data:', error);
    return res.status(500).json({ error: error.message });
  }
};

export const fetchUserData:RequestHandler = async(req, res, next): Promise<any> => {
  const userId: string = (req as any).userId;

  try {
    const userDoc = await db.collection("USERS").doc(userId).get();

    if (!userDoc.exists) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json(getUserObject(userDoc));
  } catch (error: any) {
    console.error('Error fetch user data:', error);
    return res.status(500).json({ error: error.message });
  }
};

