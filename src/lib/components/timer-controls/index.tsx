import Button from "../button";

interface Props {
  cycle: string;
  isRunning: boolean;
  onCycleChange: (cycle: "pomodoro" | "curta" | "longa", time: string) => void;
}

const TimerControls: React.FC<Props> = ({
  cycle,
  isRunning,
  onCycleChange,
}) => {
  return (
    <div className="flex flex-row gap-4 flex-wrap justify-center">
      <Button
        onClick={() => onCycleChange("pomodoro", "25:00")}
        label="Pomodoro"
        isLink
        isActive={cycle === "pomodoro"}
        disabled={isRunning}
      />
      <Button
        onClick={() => onCycleChange("curta", "05:00")}
        label="Pausa curta"
        isLink
        isActive={cycle === "curta"}
        disabled={isRunning}
      />
      <Button
        onClick={() => onCycleChange("longa", "15:00")}
        label="Pausa longa"
        isLink
        isActive={cycle === "longa"}
        disabled={isRunning}
      />
    </div>
  );
};

export default TimerControls;
