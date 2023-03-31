import { useNavigate } from "react-router-dom";

export const PlayButton = (props) => {
  const { children } = props;
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/main");
        }}
      >
        {children}
      </button>
    </div>
  );
};
