import { EditIcon, DeleteIcon } from "lucide-react";
import type { Todo } from "./Type";

type TodoListItem = {
  todos : Todo[];
  onClickDelete: (index:string) => void;
  onClickEdit: (index: number) => void;
  onToggleComplete: (index: number) => void;
}

export const TodoList = ({todos,onClickDelete,onClickEdit,onToggleComplete}: TodoListItem) => {
  return (
    <>
      {todos.map((todo,index) => (
      <div className="flex items-center justify-between gap-2 rounded-xl border p-4" key={index}>
        <div className="flex flex-1 gap-3">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleComplete(index)}
              className="flex-shrink-0 appearance-none h-5 w-5 rounded-full border border-gray-400 checked:bg-green-500 checked:border-transparent checked:ring-2 checked:ring-indigo-300 cursor-pointer transition"
            />
          </div>
          <span className={`flex-1 break-words text-base transition-colors duration-300 ${todo.completed ? "line-through text-gray-400" : "" }`}>{todo.text}</span>
        </div>
        <div className="flex flex-shrink-0 gap-3">
          <EditIcon onClick={() => onClickEdit(index)} />
          <DeleteIcon onClick={() => onClickDelete(todo.id)} />
        </div>
      </div>
      ))}
    </>
  );
};
