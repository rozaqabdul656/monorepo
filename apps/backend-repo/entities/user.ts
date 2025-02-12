export interface User {
    uid: string;
    name: string;
    email: string;
    age?: number | null;
}

export const getUserObject = (doc: FirebaseFirestore.DocumentSnapshot): User => ({
  uid: doc.id,
  name: doc.data()?.name,
  email: doc.data()?.email,
  age: doc.data()?.age || null,
});
