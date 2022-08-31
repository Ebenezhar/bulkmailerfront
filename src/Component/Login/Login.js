import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { config } from "../../Config/config";

function Login() {
  const emailPattern = new RegExp(/^\S+@\S+\.\S+$/);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (value) => {
      let errors = {};
      if (!value.email) {
        errors.email = "Email is required";
      } else if (!value.emailPattern.test(formik.values.email)) {
        errors.email = "Email is not valid";
      }
      if (!value.password) {
        errors.password = "Password is required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      const register = await axios.post(`${config.api}/login`, values);
    },
  });
  return (
    <div className="min-h-screen bg-grey-50 flex flex-col justify-center bg-gradient-to-r from-emerald-400 to-emerald-200">
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-grey-300 rounded shadow-2xl">
        <div className="max-w-md w-full mx-auto">
          <div className="text-center font-medium text-xl">Mailer</div>
          <div className="text-3xl font-bold text-grey-900 mt-2 text-center">
            Send your email here
          </div>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-6 align-center"
        >
          <label className="text-sm font-bold text-gray-600 block mt-5">
            Email
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-0"
            placeholder="abc@example.com"
          ></input>
          <label className="text-sm font-bold text-gray-600 block">
            Password
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="********"
          ></input>
          <div className="w-full flex flex-wrap mb-2 justify-between">
            <button className="w-2/6 py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">
              Submit
            </button>
            <p>
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                to="/forgotPassword"
              >
                {" "}
                Forgot password ?
              </Link>
            </p>
          </div>
        </form>
        <p className="mt-3 p-2 text-sm text-center">
          Don't you have an account?{" "}
          <Link
            className="text-blue-500 text-sm hover:text-blue-700 underline-offset-4 "
            to="/register/verifyMail"
          >
            <u>Register</u>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
