import { Plus } from "lucide-react";
import type { ChangeEvent } from "react";

type InputItem = {
  inputText: string;
  onClickAdd: () => void;
  onChangeInputTxt: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const TodoInput = ({inputText,onClickAdd,onChangeInputTxt}:InputItem) => {
  return (
    <>
      <div className="mb-4">
        <div className="flex gap-2">
          <input
            className="w-full rounded p-2 text-black"
            placeholder="write your new task"
            value={inputText}
            onChange={onChangeInputTxt}
          />
          <button className="flex h-10  w-10 items-center justify-center rounded-full bg-orange-500 text-black shadow-md transition-transform duration-200 hover:scale-105 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  onClick={onClickAdd}>
            <Plus size={24} strokeWidth={2}></Plus>
          </button>
        </div>
      </div>
    </>
  );
};
