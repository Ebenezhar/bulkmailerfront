import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "../../UserContext/UserContext";
function VerifyOtp() {
  let navigate = useNavigate();
  const userContextData = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.otp) {
        errors.otp = "Please enter your otp";
      } else if (values.otp.length < 4) {
        errors.otp = "OTP not valid";
      }
      return errors;
    },
    onSubmit: (values) => {
      try {
        if (values.otp == userContextData.otp) {
          alert("OTP verified successfully");
          navigate("/register/form");
        } else if (values.otp != userContextData.otp) {
          alert("OTP Mismatched. Try again");
        }
      } catch (errors) {
        console.log(errors);
      }
    },
  });
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-gray-600 to-gray-500">
      <div className="max-w-lg w-full mx-auto mt-4 bg-gray-800 p-10 rounded-2xl shadow-lg">
        <div className="text-start text-white mb-10 font-bold">
          <img
            style={{ display: "inline" }}
            src="https://img.icons8.com/3d-fluency/30/000000/mail.png"
          />
          <span> Bulk Mailer App</span>
        </div>
        <p className="text-lg font-bold m-3 text-gray-300 block">
          Mail: {userContextData.mailid}
        </p>
        <div className="flex flex-col justify-center items-center">
          <form
            onSubmit={formik.handleSubmit}
            className="w-full flex flex-row align-center"
          >
            <div className="flex flex-col w-5/6  m-4">
              <label className="text-sm font-bold text-gray-600 block ">
                Enter the OPT:
              </label>
              <input
                type={"Number"}
                name={"otp"}
                value={formik.values.otp}
                onChange={formik.handleChange}
                className="w-full p-2 border bg-gray-600 border-gray-300 rounded mt-0 font-medium text-white"
                placeholder="- - - -"
              />
              {formik.errors.otp ? (
                <span className="text-red-500 text-xs italic">
                  {" "}
                  {formik.errors.otp}
                </span>
              ) : null}
            </div>
            <button
              type={"submit"}
              className=" w-2/6 mt-9 mb-4 bg-gray-500 hover:bg-gray-600 rounded-md text-white text-lg"
            >
              verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerifyOtp;
