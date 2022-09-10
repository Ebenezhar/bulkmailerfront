import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { config } from "../../Config/config";

function MailVerification() {

  const notify = () => {
    toast.success("Email sent !");
  }
  let navigate = useNavigate();
  const userContextData = useContext(UserContext);
  const emailPattern = new RegExp(/^\S+@\S+\.\S+$/);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Please enter your email";
      } else if (!emailPattern.test(formik.values.email)) {
        errors.email = "Email is not valid";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        userContextData.setmailid(values.email);
        let mail = await axios.post(`${config.api}/register/sendmail`, values);
        // alert(mail.data.message);
        userContextData.setOtp(mail.data.otp);
        notify()
        setTimeout(() => {
          navigate("/register/verifyOtp");
        }, 5 * 1000);
      } catch (errors) {
        alert(errors.response.data.message);
      }
    },
  });
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-gray-600 to-gray-500">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="max-w-lg w-full mx-auto mt-4 bg-gray-800 p-10 rounded-2xl shadow-lg">
        <div className="text-start text-white mb-10 font-bold">
          <img
            style={{ display: "inline" }}
            src="https://img.icons8.com/3d-fluency/30/000000/mail.png"
          />
          <span> Bulk Mailer App</span>
        </div>
        <p className="text-sm font-bold text-gray-600 block">START FOR FREE</p>
        <p className="text-4xl font-bold text-white block">
          {" "}
          Create New Account
          <span className="text-5xl font-bold text-gray-500">.</span>
        </p>
        <p className="mb-3 mt-1 text-sm  text-gray-600">
          Already have an account?{" "}
          <Link className="text-blue-500 text-sm hover:text-blue-300" to="/">
            <u>Login</u>
          </Link>
        </p>
        <div className="flex flex-col justify-center items-center">
          <form
            onSubmit={formik.handleSubmit}
            className="w-full flex flex-row align-center"
          >
            <div className="flex flex-col w-5/6  m-4">
              <label className="text-sm font-bold text-gray-600 block ">
                Email
              </label>
              <input
                type={"text"}
                name={"email"}
                value={formik.values.email}
                onChange={formik.handleChange}
                className="w-full p-2 border bg-gray-600 border-gray-300 rounded mt-0 font-medium text-white"
                placeholder="abc@example.com"
              />
              {formik.errors.email ? (
                <span className="text-red-500 text-xs italic">
                  {" "}
                  {formik.errors.email}
                </span>
              ) : null}
            </div>
            <button
              type={"submit"}
              // onClick={notify}
              className=" w-2/6 mt-9 mb-4 bg-gray-500 hover:bg-gray-600 rounded-md text-white text-lg h-10"
            >
              send Mail
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MailVerification;
