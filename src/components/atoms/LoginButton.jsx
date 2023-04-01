export const LoginButton = (props) => {
  const { onClick, className } = props;
  return (
    <button
      onClick={onClick}
      className={className}
    >
      ログイン
    </button>
  );
};
