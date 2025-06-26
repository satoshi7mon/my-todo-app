import { EditIcon, DeleteIcon } from "lucide-react";

type TodoListItem = {
  text : string;
}

export const TodoList = ({text}: TodoListItem) => {
  return (
    <>
      <div className="flex items-center justify-between rounded-xl border p-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full border border-red-500" />
          <span className="text-base">{text}</span>
        </div>
        <div className="flex gap-3">
          <EditIcon />
          <DeleteIcon />
        </div>
      </div>
    </>
  );
};
