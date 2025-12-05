import Button from "../button";

interface Props {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
}

const TimerActions: React.FC<Props> = ({
  isRunning,
  onStart,
  onPause,
  onStop,
}) => {
  return (
    <div className="flex flex-row gap-6 items-center">
      {!isRunning ? (
        <Button onClick={onStart} label="Iniciar" isLink isLarge isActive />
      ) : (
        <Button onClick={onPause} label="Parar" isLink isLarge isActive />
      )}
      <Button onClick={onStop} label="Finalizar" isLink />
    </div>
  );
};

export default TimerActions;
