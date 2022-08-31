import React, { createContext, useState } from "react";

let UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [mailid, setmailid] = useState();
  return (
    <UserContext.Provider value={{ mailid, setmailid }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
