interface Props {
  id: number;
  text: string;
  done: boolean;
  onCheck?: () => void;
}

const Task: React.FC<Props> = ({ id, text, done, onCheck }) => {
  const checkboxId = `task-${id}`;

  return (
    <div className="flex flex-row gap-2 border border-zinc-400 rounded p-4">
      <input
        type="checkbox"
        id={checkboxId}
        checked={done}
        onChange={onCheck}
      />
      <label
        htmlFor={checkboxId}
        className={done ? "line-through cursor-pointer" : "cursor-pointer"}
      >
        {text}
      </label>
    </div>
  );
};

export default Task;
