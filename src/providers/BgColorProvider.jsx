import React, {
  createContext,
  useState
} from "react";

export const BgColorContext = createContext();

export const BgColorProvider = (props) => {
  const { children } = props;

  const [bgColor, setBgColor] = useState();
  return (
    <BgColorContext.Provider
      value={{ bgColor, setBgColor }}
    >
      {children}
    </BgColorContext.Provider>
  );
};
