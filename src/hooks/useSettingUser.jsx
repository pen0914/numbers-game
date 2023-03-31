import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

export const useSettingUser = () =>
  useContext(UserContext);
