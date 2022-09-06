import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Component/Dashboard/Dashboard";
import Portal from "./Component/Dashboard/Portal";
import ForMailVerif from "./Component/ForgotPassword/ForMailVerif";
import ForVerifyOtp from "./Component/ForgotPassword/ForVerifyOtp";
import ResetPassword from "./Component/ForgotPassword/ResetPassword";
import Login from "./Component/Login/Login";
import Profile from "./Component/Profile/Profile";
import AddRecipient from "./Component/Recipients/AddRecipient";
import EditRecipient from "./Component/Recipients/EditRecipient";
import Recipients from "./Component/Recipients/Recipients";
import MailVerification from "./Component/Register/MailVerification";
import Register from "./Component/Register/Register";
import VerifyOtp from "./Component/Register/VerifyOtp";
import Draft from "./Component/sendMail/DraftedMails";
import SendMail from "./Component/sendMail/SendMail";
import { UserProvider } from "./UserContext/UserContext";

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
            {/* <Route path="/portal" element={<Dashboard />} /> */}
            <Route path="/portal" element={<Recipients />} />
            <Route path="/portal/profile" element={<Profile />} />
            <Route path="/portal/recipients/addrecipients" element={<AddRecipient />} />
            <Route path="/portal/recipients/editRecipients/:id" element={<EditRecipient />} />
            <Route path="/portal/sendmail" element={<SendMail />} />
            <Route path="/portal/draft" element={<Draft />} />
          </Route>
          <Route path="reset/forgotPassword" element={<ForMailVerif />} />
          <Route path="reset/otpVerfication" element={<ForVerifyOtp />} />
          <Route path="reset/resetPassword" element={<ResetPassword />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
