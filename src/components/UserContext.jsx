import React, { createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = React.useState("john");
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
