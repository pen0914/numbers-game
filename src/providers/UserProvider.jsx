import React, {
  createContext,
  useState
} from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const { children } = props;

  const [userData, setUserData] = useState([
    { id: "" }
  ]);
  return (
    <UserContext.Provider
      value={{ userData, setUserData }}
    >
      {children}
    </UserContext.Provider>
  );
};
