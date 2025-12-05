import Button from "../button";

interface Props {
  hideCompleted: boolean;
  onToggleHide: () => void;
}

const TaskHeader: React.FC<Props> = ({ hideCompleted, onToggleHide }) => {
  return (
    <div className="flex flex-row gap-8 justify-between mb-8 shrink-0">
      <h1 className="text-4xl font-bold">Tarefas</h1>
      <Button
        label={hideCompleted ? "Exibir finalizadas" : "Ocultar finalizadas"}
        isActive
        onClick={onToggleHide}
        isLink
      />
    </div>
  );
};

export default TaskHeader;
