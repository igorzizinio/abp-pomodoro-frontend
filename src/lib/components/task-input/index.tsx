interface Props {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
}

const TaskInput: React.FC<Props> = ({ value, onChange, onAdd }) => {
  return (
    <div className="flex flex-col shrink-0 gap-2 pt-4 max-md:mb-8">
      <div className="flex flex-row items-center gap-2">
        <div className="flex-1 h-0.5 bg-zinc-400" />
        <span className="font-semibold text-sm whitespace-nowrap text-zinc-500">
          Adicionar nova tarefa
        </span>
        <div className="flex-1 h-0.5 bg-zinc-400" />
      </div>
      <input
        type="text"
        placeholder="Digite sua tarefa"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onAdd()}
        className="flex flex-row gap-2 border border-zinc-400 rounded p-4 text-zinc-500"
      />
      <button
        onClick={onAdd}
        className="w-full bg-lime-500 rounded h-18 hover:bg-lime-600 transition-colors cursor-pointer"
      >
        <span className="text-black font-semibold text-2xl">Nova Tarefa</span>
      </button>
    </div>
  );
};

export default TaskInput;
