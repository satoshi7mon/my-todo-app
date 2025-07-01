import { useState, type ChangeEvent } from "react";
import { ClipboardList } from "lucide-react";
import { TodoCompleteProgress } from "@/features/todo/TodoCompleteProgress";
import { TodoInput } from "@/features/todo/TodoInput";
import { TodoList } from "@/features/todo/TodoList";
import { EditTodoDialog } from "@/features/todo/EditTodoDialog";
import type { Todo } from "./features/todo/type";


function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const [todoText,setTodoText] = useState<string>("");

  const [editIndex,setEditIndex] = useState<number | null>(null);

  const [editText, setEditText] = useState<string>("");

  // todo入力後(+)を押した際の処理
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todos,{text:todoText,completed:false}];
    setTodos(newTodos);
    setTodoText("");
  }

  const onChangeInputTxt = (event:ChangeEvent<HTMLInputElement>) => setTodoText(event.target.value);

  //完了
  const onToggleComplete = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  // 削除
  const onClickDelete = (index:number) => {
    const newTodoLists = [...todos];
    newTodoLists.splice(index,1);
    setTodos(newTodoLists);
    //ここに完了数を更新する処理を書く
  }
  //編集
  const onClickEdit = (index:number) => {
      setEditIndex(index);
      setEditText(todos[index].text);
  }
  //保存
  const onClickSave = (newText: string) => {
    if (editIndex !== null) {
      const newTodos = [...todos];
      newTodos[editIndex].text = newText;
      setTodos(newTodos);
      setEditIndex(null);
    }
  }
  // 完了数
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <>
      {/* 大枠の設定 */}
      <div className="flex min-h-screen justify-center bg-neutral-900 p-4 pt-8 text-white font-sans">
        {/* コンテンツ(Todoアプリ)エリア */}
        <div className="w-full max-w-screen-md rounded-2xl bg-neutral-800 my-10 p-6 shadow-lg">
          {/* タイトル：左上 */}
          <div className="p-4">
            <h1 className="text-3xl font-semibold mb-6">
              <span className="text-red-500">Todo</span> App
            </h1>
          </div>
          {/* Todo部：中央寄せ */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md space-y-8 p-4">
              {/* 完了数表示 */}
              {todos.length === 0 ? (
                <div className="flex flex-col items-center text-gray-400">
                  <ClipboardList className="h-8 w-8 mb-2" />
                  <p>タスクがまだありません</p>
                  <p>タスクを入力して「＋」から追加しましょう</p>
                </div>
              ) : (<TodoCompleteProgress done={completedCount} total={todos.length} /> )}
              {/* 入力エリア */}
              <TodoInput 
                inputText={todoText}
                onClickAdd={onClickAdd}
                onChangeInputTxt={onChangeInputTxt}
                />
              {/* 現在のTODO */}
              <TodoList 
              todos={todos}
              onClickDelete={onClickDelete}
              onClickEdit={onClickEdit}
              onToggleComplete={onToggleComplete}
              />
              {/* 編集モーダル */}
              <EditTodoDialog
                open={editIndex !== null}
                onOpenChange={(open) => !open ? setEditIndex(null) : undefined}
                initialText={editIndex !== null ? todos[editIndex].text : ""}
                onSave={onClickSave}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
