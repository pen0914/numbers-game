import { useCallback } from "react";
import { useSettingUser } from "./useSettingUser";

export const useLogin = () => {
  const { setUserData } = useSettingUser();
  const data = { id: "1", pass: "1" };
  const login = useCallback((user) => {
    if (data.id === user.id) {
      if (data.pass === user.pass) {
        const selectData = data.id;
        setUserData(selectData);
      } else {
        alert("パスワードが一致しません。");
      }
    } else {
      alert("ユーザーが存在しません。");
    }
  }, []);

  return { login };
};
