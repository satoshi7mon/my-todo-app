import type { Timestamp } from "firebase/firestore";

export type Todo = {
  text: string;
  completed: boolean;
  // Firebaseでid(とソート用のtimestamp)が必要なため追加
  id:string;
  createdAt:Timestamp;
};