import { useRef, useState } from "react";
import TimerDisplay from "../timer-display";
import EasyTimer from "easytimer.js";
import Pomodoro from "../pomodoro";
import TimerControls from "../timer-controls";
import TimerActions from "../timer-actions";

const TimerContainer: React.FC = () => {
  const [time, setTime] = useState("25:00");
  const [cycle, setCycle] = useState("pomodoro");
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef(new EasyTimer());

  const startTimer = () => {
    const [minutes, seconds] = time.split(":").map(Number);
    if (timerRef.current) {
      timerRef.current.start({
        countdown: true,
        startValues: { minutes, seconds },
      });

      timerRef.current.addEventListener("secondsUpdated", () => {
        setTime(
          timerRef.current.getTimeValues().toString(["minutes", "seconds"])
        );
      });

      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    timerRef.current.pause();
    setIsRunning(false);
  };

  const stopTimer = () => {
    timerRef.current.stop();
    setTime("25:00");
    setIsRunning(false);
  };

  return (
    <div
      className="flex flex-col items-start gap-8 h-full flex-1 p-12 max-md:p-6 max-md:items-center justify-evenly max-md:fixed max-md:h-[80%] max-md:w-full max-md:pb-12 bg-center bg-cover bg-no-repeat relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(158, 226, 0, 0.5), rgba(158, 226, 0, 0.5)), url('/forest.webp')",
      }}
    >
      <div className="flex flex-col gap-8 max-md:items-center flex-wrap">
        <Pomodoro />
        <TimerControls
          cycle={cycle}
          isRunning={isRunning}
          onCycleChange={(newCycle, newTime) => {
            setCycle(newCycle);
            setTime(newTime);
          }}
        />
      </div>
      <TimerDisplay time={time} />
      <TimerActions
        isRunning={isRunning}
        onStart={startTimer}
        onPause={pauseTimer}
        onStop={stopTimer}
      />
    </div>
  );
};

export default TimerContainer;
