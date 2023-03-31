import { useCallback } from "react";

export const UseLogin = () => {
  const data = { id: "1", pass: "1" };
  const login = useCallback((user) => {
    const selectData = data.find((d) => {
      d === user;
    });
    setLoginUser(selectData);
  }, []);

  return { login };
};
