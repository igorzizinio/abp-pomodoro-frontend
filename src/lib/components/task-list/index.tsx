import Task from "../task";

interface TaskType {
    id: number;
    text: string;
    done: boolean;
}

interface Props {
    tasks: TaskType[];
    onToggle: (id: number) => void;
}

const TaskList: React.FC<Props> = ({ tasks, onToggle }) => {
    return (
        <div className="flex flex-col flex-1 gap-2 mb-8 overflow-y-auto min-h-0">
            {tasks.map((task) => (
                <Task 
                    key={task.id}
                    text={task.text} 
                    done={task.done}
                    onCheck={() => onToggle(task.id)}
                />
            ))}
        </div>
    );
};

export default TaskList;
