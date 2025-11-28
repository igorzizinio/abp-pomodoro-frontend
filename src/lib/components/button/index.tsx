interface Props {
  label: string;
  isLink?: boolean;
  isLarge?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  label,
  isLink,
  isLarge,
  isActive,
  onClick,
}) => {
  const buttonClasses = `
        botoes
        ${isLink ? "btn-link" : ""}
        ${isLarge ? "btn-large" : ""}
        ${isActive ? "btn-active" : ""}
    `.trim();

  return (
    <>
      <button onClick={onClick} className={buttonClasses}>
        {label}
      </button>
    </>
  );
};

export default Button;
