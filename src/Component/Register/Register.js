import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../../Config/config";
import UserContext from "../../UserContext/UserContext";

function Register() {
  const navigate = useNavigate();
  const [gender, setgender] = useState();
  const handlegender = (e) => {
    setgender(e.target.value)
  }

  const userContextData = useContext(UserContext);
  const emailPattern = new RegExp(/^\S+@\S+\.\S+$/);
  const passwordPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const formik = useFormik({
    initialValues: {
      firstName: "",
      secondName: "",
      email: "",
      age: "",
      country: "",
      gender: "",
      password: "",
      verPassword: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.firstName) {
        errors.firstName = "Please enter your first name";
      } else if (values.firstName.length < 5) {
        errors.firstName = "Length must be at least 5 characters";
      }
      if (!values.secondName) {
        errors.secondName = "Please enter your second name";
      } else if (values.secondName.length < 5) {
        errors.secondName = "Length must be at least 5 characters";
      }
      if (!values.email) {
        errors.email = "Please enter your email";
      }
      else if (!emailPattern.test(formik.values.email)) {
        errors.email = "Email is not valid";
      }
      if (!values.age) {
        errors.age = "Please enter youe Age";
      } else if (values.age < 8) {
        errors.age = "Enter the valid Age";
      }
      if (!values.country) {
        errors.country = "Please enter your country";
      }
      values.gender = gender;
      if (!values.gender) {
        errors.gender = "Please select gender";
      }
      if (!values.password) {
        errors.password = "Please enter the password";
      }
      else if (!passwordPattern.test(formik.values.password)) {
        errors.password = "Password is not valid";
      }
      if (!values.verPassword) {
        errors.verPassword = "Please enter the password";
      } else if (values.password != values.verPassword) {
        errors.verPassword = "Passwords does not match";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        let register = await axios.post(`${config.api}/register/registerUser`, values);
        alert(register.data.message);
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
  });
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-gray-600 to-gray-500">
      <div className="max-w-5xl w-full mx-auto mt-4 bg-gray-800 p-8 rounded-2xl shadow-lg">
        <div className="text-start text-white mb-10 font-bold">
          <img
            style={{ display: "inline" }}
            src="https://img.icons8.com/3d-fluency/30/000000/mail.png"
          />
          <span> Bulk Mailer App</span>
        </div>
        <p className="text-3xl m-3 font-bold text-white block">
          {" "}
          Provide your details here
        </p>
        <div className="flex flex-col justify-center items-start">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-wrap align-center over"
          >
            <div className="flex flex-wrap align-center over">
              <div className="flex flex-col m-4 w-5/12">
                <label className="text-sm font-bold text-gray-600 block">
                  First Name
                </label>
                <input
                  type={"text"}
                  name={"firstName"}
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  className="w-full p-2 border  bg-gray-600 border-gray-300 rounded mt-0 font-medium text-white"
                  placeholder="john"
                />
                {formik.errors.firstName ? (
                  <span className="text-red-500 text-xs italic">
                    {" "}
                    {formik.errors.firstName}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-col m-4 w-5/12">
                <label className="text-sm font-bold text-gray-600 block ">
                  Second Name
                </label>
                <input
                  type={"text"}
                  name={"secondName"}
                  value={formik.values.secondName}
                  onChange={formik.handleChange}
                  className="w-full p-2 border bg-gray-600 border-gray-300 rounded mt-0 font-medium text-white"
                  placeholder="wick"
                />
                {formik.errors.secondName ? (
                  <span className="text-red-500 text-xs italic">
                    {" "}
                    {formik.errors.secondName}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-col m-4 w-5/12">
                <label className="text-sm font-bold text-gray-600 block ">
                  Email
                </label>
                <input
                  type={"text"}
                  name={"email"}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="w-full p-2 border bg-gray-600 border-gray-300 rounded mt-0 font-medium text-white"
                  placeholder={userContextData.mailid}
                />
                {formik.errors.email ? (
                  <span className="text-red-500 text-xs italic">
                    {" "}
                    {formik.errors.email}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-col m-4 w-5/12">
                <label className="text-sm font-bold text-gray-600 block ">
                  Age
                </label>
                <input
                  type={"Number"}
                  name={"age"}
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  className="w-full p-2 border bg-gray-600 border-gray-300 rounded mt-0 font-medium text-white"
                  placeholder=""
                />
                {formik.errors.age ? (
                  <span className="text-red-500 text-xs italic">
                    {" "}
                    {formik.errors.age}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-col m-4 w-5/12">
                <label className="text-sm font-bold text-gray-600 block ">
                  Country
                </label>
                <input
                  type={"text"}
                  name={"country"}
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  className="w-full p-2 border bg-gray-600 border-gray-300 rounded mt-0 font-medium text-white"
                  placeholder=""
                />
                {formik.errors.country ? (
                  <span className="text-red-500 text-xs italic">
                    {" "}
                    {formik.errors.country}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-col m-4 w-5/12">
                <label className="text-sm font-bold text-gray-600 block ">
                  Gender
                </label>
                <div className="flex flex-row align-center">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={handlegender}
                  />
                  <label
                    className="mr-2 ml-2 text-lg font-bold text-gray-300 block"
                    for="male"
                  >
                    Male
                  </label>
                  <br />
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={handlegender}
                  />
                  <label
                    className="mr-2 ml-2 text-lg font-bold text-gray-300 block"
                    for="female"
                  >
                    Female
                  </label>
                </div>
                {formik.errors.gender ? (
                  <span className="text-red-500 text-xs italic">
                    {" "}
                    {formik.errors.gender}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-col m-4 w-5/12">
                <label className="text-sm font-bold text-gray-600 block">
                  Password
                </label>
                <input
                  type={"password"}
                  name={"password"}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className="w-full p-2 border bg-gray-600 border-gray-300 rounded mt-0 font-medium text-white"
                  placeholder="**********"
                />
                {formik.errors.password ? (
                  <span className="text-red-500 text-xs italic">
                    {" "}
                    {formik.errors.password}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-col m-4 w-5/12">
                <label className="text-sm font-bold text-gray-600 block">
                  Verify Password
                </label>
                <input
                  type={"password"}
                  name={"verPassword"}
                  value={formik.values.verPassword}
                  onChange={formik.handleChange}
                  className="w-full p-2 border bg-gray-600 border-gray-300 rounded mt-0 font-medium text-white"
                  placeholder="**********"
                />
                {formik.errors.verPassword ? (
                  <span className="text-red-500 text-xs italic">
                    {" "}
                    {formik.errors.verPassword}
                  </span>
                ) : null}
              </div>
            </div>
            <button type={"submit"}
              className=" mx-3 px-2 mt-9 mb-4 bg-gray-500 hover:bg-gray-600 rounded-md text-white text-lg h-10"
            >

              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
