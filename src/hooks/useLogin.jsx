import { useCallback } from "react";
import { useSettingUser } from "./useSettingUser";

export const useLogin = () => {
  const { setUserData } = useSettingUser();
  const data = { id: "1", pass: "1" };
  const login = useCallback(
    (props) => {
      const { user, setLogin } = props;
      if (data.id === user.id) {
        if (data.pass === user.pass) {
          const selectData = data.id;
          setUserData(selectData);
          setLogin(true);
          alert("ログインしました。");
        } else {
          alert("パスワードが一致しません。");
        }
      } else {
        alert("無効なIDです。");
      }
    },
    [setUserData]
  );

  return { login };
};
