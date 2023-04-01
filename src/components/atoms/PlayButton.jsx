import { useNavigate } from "react-router-dom";

export const PlayButton = (props) => {
  const { children, className } = props;
  const navigate = useNavigate();

  return (
    <button
      className={className}
      onClick={() => {
        navigate("/main");
      }}
    >
      {children}
    </button>
  );
};
