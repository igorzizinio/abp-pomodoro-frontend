import { useState, useEffect } from "react";
import TaskHeader from "../task-header";
import TaskList from "../task-list";
import TaskInput from "../task-input";

interface TaskType {
    id: number;
    text: string;
    done: boolean;
}

const STORAGE_KEY = "pomodoro-tasks";

const TaskContainer: React.FC = () => {
    const [tasks, setTasks] = useState<TaskType[]>(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    });
    const [newTaskText, setNewTaskText] = useState("");
    const [hideCompleted, setHideCompleted] = useState(false);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    const toggleTask = (id: number) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, done: !task.done } : task
        ));
    };

    const addTask = () => {
        if (newTaskText.trim()) {
            const newTask: TaskType = {
                id: Date.now(),
                text: newTaskText,
                done: false
            };
            setTasks([...tasks, newTask]);
            setNewTaskText("");
        }
    };

    const filteredTasks = hideCompleted 
        ? tasks.filter(task => !task.done) 
        : tasks;

    return (
        <div className="flex flex-col bg-white flex-1 p-6 md:p-12 md:relative max-md:absolute max-md:top-[80%] max-md:left-0 max-md:right-0 max-md:rounded-t-2xl max-md:z-99 max-md:min-h-screen max-md:pb-0 -translate-y-6">
            <TaskHeader 
                hideCompleted={hideCompleted}
                onToggleHide={() => setHideCompleted(!hideCompleted)}
            />
            <TaskList 
                tasks={filteredTasks}
                onToggle={toggleTask}
            />
            <TaskInput 
                value={newTaskText}
                onChange={setNewTaskText}
                onAdd={addTask}
            />
        </div>
    )
}

export default TaskContainer;