import { collection, doc ,addDoc, getDocs, deleteDoc, updateDoc, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

// 追加
export const addTodo = async (text: string) => {
  try {
    await addDoc(collection(db, "todos"), {
      text,
      createdAt: serverTimestamp(),
      completed: false
    });
  } catch (error) {
    console.error("Error Add Document: ", error);
  }
};

// 取得 
export const fetchTodos = async () => {
  try {
    // ソートする
    const sorted = query(
        collection(db,"todos"),
        orderBy("createdAt","asc"),
    );
    const querySnapshot = await getDocs(sorted);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data() as {text:string,completed:boolean}
    }));
  } catch (error) {
    console.error("Error Fetch Documents: ", error);
    return [];
  }
};

// 削除
export const deleteTodo = async (id: string) => {
  try {
    await deleteDoc(doc(db, "todos", id));
  } catch (error) {
    console.error("Error Delete Document: ", error);
  }
};

// 更新
export const updateTodo = async (id: string, newText: string) => {
  try {
    await updateDoc(doc(db, "todos", id), {
      text: newText
    });
  } catch (error) {
    console.error("Error Update Document: ", error);
  }
};