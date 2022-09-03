import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Component/Dashboard/Dashboard";
import Portal from "./Component/Dashboard/Portal";
import ForgotPassword from "./Component/ForgotPassword/ForgotPassword";
import Login from "./Component/Login/Login";
import AddRecipient from "./Component/Recipients/AddRecipient";
import Recipients from "./Component/Recipients/Recipients";
import MailVerification from "./Component/Register/MailVerification";
import Register from "./Component/Register/Register";
import VerifyOtp from "./Component/Register/VerifyOtp";
import SendMail from "./Component/Mail/SendMail";
import { UserProvider } from "./UserContext/UserContext";
import Draft from "./Component/Mail/Draft";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register/verifyMail" element={<MailVerification />} />
          <Route path="/register/verifyOtp" element={<VerifyOtp />} />
          <Route path="/register/form" element={<Register />} />
          <Route path="/portal" element={<Portal />}>
            <Route path="/portal" element={<Dashboard />} />
            <Route path="/portal/recipients" element={<Recipients />} />
            <Route path="/portal/recipients/addrecipients" element={<AddRecipient />} />
            <Route path="/portal/sendmail" element={<SendMail />} />
            <Route path="/portal/draft" element={<Draft />} />
          </Route>
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
