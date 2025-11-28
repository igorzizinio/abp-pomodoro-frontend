import "./styles.css";

interface Props {
  time: string;
}

const Timer: React.FC<Props> = ({ time }) => {
  return (
    <>
      <div className="counter">
        <div className="clock">{time}</div>
        <div className="cycle">#1 Pomodoro</div>
      </div>
    </>
  );
};

export default Timer;
