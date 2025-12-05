interface Props {
  time: string;
}

const TimerDisplay: React.FC<Props> = ({ time }) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="text-9xl font-bold display">{time}</div>
      <div className="font-bold text-3xl">#1 Pomodoro</div>
    </div>
  );
};

export default TimerDisplay;
