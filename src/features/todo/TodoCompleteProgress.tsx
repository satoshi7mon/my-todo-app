type CompleteProgress = {
  done: number;
  total: number;
};

export const TodoCompleteProgress = ({ done, total }: CompleteProgress) => {
  const progress = `${done}/${total}`;

  return (
    <>
      <div className="flex w-full items-center justify-between rounded-xl border border-neutral-100 bg-gray-950 p-9">
        <div>
          <p className="pb-2 text-2xl font-extrabold">
            TODO DONE
          </p>
          <p className="text-lg font-semibold">Keep stacking!</p>
        </div>
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-orange-500">
          <span className="text-xl font-bold text-black">
            {progress}
          </span>
        </div>
      </div>
    </>
  );
};
