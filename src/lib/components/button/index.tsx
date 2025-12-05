interface Props {
  label: string;
  isLink?: boolean;
  isLarge?: boolean;
  isActive?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  label,
  isLink,
  isLarge,
  isActive,
  disabled,
  onClick,
}) => {
  const buttonClasses = `
        rounded text-white text-center text-nowrap transition-all px-2
        ${isLink ? "text-lg py-2 px-4 font-semibold" : ""}
        ${isLarge ? "text-4xl px-6 py-4" : ""}
        ${isActive ? "bg-black text-white font-bold" : ""}
        ${
          disabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:cursor-pointer hover:bg-black/80 hover:text-white"
        }
    `.trim();

  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
