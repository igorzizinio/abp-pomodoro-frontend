interface Props {
    text: string;
    done: boolean;
    onCheck?: () => void;
}

const Task: React.FC<Props> = ({text, done, onCheck}) => {
    const id = `task-${text.replace(/\s+/g, '-').toLowerCase()}`;
    
    return (
        <div className="flex flex-row gap-2 border border-zinc-400 rounded p-4">
            <input type="checkbox" id={id} checked={done} onChange={onCheck} />
            <label htmlFor={id} className={done ? "line-through cursor-pointer" : "cursor-pointer"}>
                {text}
            </label>
        </div>
    )
}

export default Task;