import {PlusCircleIcon } from "lucide-react";

type InputItem = {
  inputText: string;
};

export const TodoInput = ({inputText}:InputItem) => {
  return (
    <>
      <div className="mb-4">
        <div className="flex gap-2">
          <input
            className="w-full rounded p-2 text-black"
            placeholder="write your task"
          />
          <button className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-black hover:bg-orange-600">
            <PlusCircleIcon></PlusCircleIcon>
          </button>
        </div>
      </div>
    </>
  );
};
