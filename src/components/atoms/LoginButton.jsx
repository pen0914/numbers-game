export const LoginButton = (props) => {
  const { onClick, className, children } = props;
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};
