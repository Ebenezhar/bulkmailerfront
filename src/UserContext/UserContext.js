import React, { createContext, useState } from "react";

let UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [mailid, setmailid] = useState();
  const [resetUser, setresetUser] = useState();
  const [profile, setProfile] = useState();
  const [otp, setOtp] = useState();
  const [loginPerson, setLoginPerson] = useState();
  const [recipients, setRecipient] = useState([]);
  const [AddTempRecipient, setAddTempRecipient] = useState([]);
  const [receivers, setReceivers] = useState([]);
  const [draftedMails, setDraftedMails] = useState([]);
  return (
    <UserContext.Provider value={{ profile, setProfile, mailid, setmailid, otp, setOtp, loginPerson, setLoginPerson, AddTempRecipient, setAddTempRecipient, recipients, setRecipient, receivers, setReceivers, draftedMails, setDraftedMails, resetUser, setresetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
