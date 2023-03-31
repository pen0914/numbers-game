import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSettingUser } from "./useSettingUser";

export const useLogin = () => {
  const { setUserData } = useSettingUser();
  const navigate = useNavigate();
  const data = { id: "1", pass: "1" };
  const login = useCallback((user) => {
    if (data.id === user.id) {
      if (data.pass === user.pass) {
        const selectData = data.id;
        setUserData(selectData);
        alert("ログインしました。");
        navigate("/main");
      } else {
        alert("パスワードが一致しません。");
      }
    } else {
      alert("ユーザーが存在しません。");
    }
  }, []);

  return { login };
};
