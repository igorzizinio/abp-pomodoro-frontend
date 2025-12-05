import TaskContainer from "./lib/components/task-container";
import TimerContainer from "./lib/components/timer-container";

function App() {
  return (
    <div className="flex flex-row max-md:flex-col h-screen max-md:overflow-y-auto max-md:relative">
      <TimerContainer />
      <TaskContainer />
    </div>
  );
}

export default App;
