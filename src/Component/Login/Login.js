import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { config } from "../../Config/config";
import UserContext from "../../UserContext/UserContext";

function Login() {
  const userContextData = useContext(UserContext)
  const emailPattern = new RegExp(/^\S+@\S+\.\S+$/);
  const navigate = useNavigate();
  const [view, setView] = useState("password");
  const [color, setcolor] = useState("text-black");
  const handleview = () => {
    if (view == "password") {
      setView("text");
      setcolor("text-blue-800");
    } else {
      setView("password");
      setcolor("text-black");
    }

  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!emailPattern.test(formik.values.email)) {
        errors.email = "Email is not valid";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const login = await axios.post(`${config.api}/login`, values);
        console.log(login);
        if (login.data.token) {
          localStorage.setItem('token', login.data.token);
          localStorage.setItem('userName', login.data.name);
          localStorage.setItem('gender', login.data.gender);
          localStorage.setItem('id', login.data.id);
          userContextData.setLoginPerson(login.data.name);
          navigate('/portal');
        } else {
          alert(login.data.message);
        }
      } catch (error) {
        alert(error.response.data.message);
        // console.log(error);
      }
    },
  });
  return (
    <div className="min-h-screen bg-grey-50 flex flex-col justify-center bg-gray-800">
      <div className="max-w-md justify-between w-full mx-auto mt-4 bg-white p-8 py-10 border border-grey-300 rounded shadow-2xl">
        <div className="text-start text-white mb-10 font-bold">
          <img
            style={{ display: "inline" }}
            src="https://img.icons8.com/3d-fluency/30/000000/mail.png" alt="Mail"
          />
          <span className="font-lg text-gray-800 "> Bulk Mailer App</span>
        </div>
        <div className="max-w-md w-full mx-auto">
          <div className="text-xl font-bold text-grey-900 mt-2 text-center">
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
            type={"text"}
            name={"email"}
            value={formik.values.email}
            onChange={formik.handleChange}
            className="w-full p-2 border font-semibold border-gray-300 rounded mt-0"
            placeholder="abc@example.com"
          ></input>
          <label className="text-sm font-bold text-gray-600 block">
            Password
          </label>
          <div className="w-full flex flex-row justify-between p-2 border font-semibold border-gray-300 rounded ">
            <input
              type={`${view}`}
              className="w-full px-2 focus:outline-none"
              name={"password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="********"
            ></input>
            <button className="relative" onClick={() => handleview()} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 ${color} h-6`}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>

          <div className="w-full flex flex-wrap mb-2 justify-between">
            <button type={"submit"} className="w-2/6 py-2 px-4 bg-gray-400 hover:bg-gray-300 rounded-md text-blue-800 text-sm font-bold">
              Login
            </button>
            <p>
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                to="reset/forgotPassword"
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
            className="text-blue-500 text-sm hover:text-blue-700 underline-offset-0 hover:font-bold hover:underline-offset-4"
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
