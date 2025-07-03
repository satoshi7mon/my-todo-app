export type Todo = {
  text: string;
  completed: boolean;
  // Firebaseでidが必要なため追加
  id:string;
};