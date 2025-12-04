interface Props {
    value: string;
    onChange: (value: string) => void;
    onAdd: () => void;
}

const TaskInput: React.FC<Props> = ({ value, onChange, onAdd }) => {
    return (
        <div className="flex flex-col shrink-0 gap-2">
            <input
                type="text"
                placeholder="Digite sua tarefa"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onAdd()}
                className="flex flex-row gap-2 border border-zinc-400 rounded p-4 text-zinc-500"
            />
            <button 
                onClick={onAdd}
                className="w-full bg-lime-500 rounded h-32 hover:bg-lime-600 transition-colors cursor-pointer"
            >
                <span className="text-black font-semibold text-4xl">Nova Tarefa</span>
            </button>
        </div>
    );
};

export default TaskInput;
