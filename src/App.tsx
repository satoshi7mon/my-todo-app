import { useState } from "react";
import { TodoCompleteProgress } from "./features/todo/TodoComplete";
import { TodoInput } from "./features/todo/TodoInput";
import { TodoList } from "./features/todo/TodoList";

function App() {

  return (
    <>
      {/* 大枠の設定 */}
      <div className="flex min-h-screen justify-center bg-indigo-200 p-4 pt-12 text-white">
        {/* コンテンツ(Todoアプリ)エリア */}
        <div className="my-10 w-full max-w-screen-md rounded-2xl bg-gray-950 p-6 text-white shadow-lg">
          {/* タイトル：左上 */}
          <div className="p-4">
            <h1 className="text-2xl font-bold">
              <span className="text-red-500">Todo</span> App
            </h1>
          </div>
          {/* Todo部：中央寄せ */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md space-y-8 p-4">
              {/* 完了数表示 */}
              <TodoCompleteProgress done={1} total={3} />
              {/* 入力エリア */}
              <TodoInput 
                inputText="inputData"/>
              {/* 現在のTODO */}
              <TodoList 
              text="todo sample"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
