export const ColorChangeButton = (props) => {
  const { children, className, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};
