import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Portal from "./Component/Dashboard/Portal";
import ForgotPassword from "./Component/ForgotPassword/ForgotPassword";
import Login from "./Component/Login/Login";
import MailVerification from "./Component/Register/MailVerification";
import Register from "./Component/Register/Register";
import VerifyOtp from "./Component/Register/VerifyOtp";
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
          <Route path="/portal" element={<Portal />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
