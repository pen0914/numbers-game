import { useContext } from "react";
import { BgColorContext } from "../providers/BgColorProvider";

export const useBgColor = () =>
  useContext(BgColorContext);
