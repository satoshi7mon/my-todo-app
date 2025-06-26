type CompleteProgress = {
  done: number;
  total: number;
};

// { taskTitle, id, isDone }: TodoItemProp

export const TodoCompleteProgress = ({ done, total }: CompleteProgress) => {
  const progress = `${done}/${total}`;

  return (
    <>
      <div className="flex w-full items-center justify-between rounded-xl border border-neutral-100 bg-gray-950 p-9 text-white">
        <div>
          <p className="font-serif text-lg font-semibold text-neutral-200">
            TODO DONE
          </p>
          <p className="font-serif text-sm text-neutral-200">Keep stacking!</p>
        </div>
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-orange-500">
          <span className="font-serif text-xl font-bold text-black">
            {progress}
          </span>
        </div>
      </div>
    </>
  );
};
