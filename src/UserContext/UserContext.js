import React, { createContext, useState } from "react";

let UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [mailid, setmailid] = useState();
  const [otp, setOtp] = useState();
  const [loginPerson, setLoginPerson] = useState();
  const [recipients, setRecipient] = useState();
  const [AddTempRecipient, setAddTempRecipient] = useState([]);
  return (
    <UserContext.Provider value={{ mailid, setmailid, otp, setOtp, loginPerson, setLoginPerson, AddTempRecipient, setAddTempRecipient, recipients, setRecipient }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
