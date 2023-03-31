import { useCallback, useContext } from "react";
import { UserContext } from "../providers/UserProvider";

export const UseLogin = () => {
  const { setUserData } = useContext(UserContext);
  const data = { id: "1", pass: "1" };
  const login = useCallback((user) => {
    if (
      data.id === user.id &&
      data.pass === user.pass
    ) {
      const selectData = data.id;
      setUserData(selectData);
      console.log(selectData);
    }
  }, []);

  return { login };
};
