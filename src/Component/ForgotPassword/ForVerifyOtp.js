import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext/UserContext";
import { ToastContainer, toast } from "react-toastify";
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import { config } from "../../Config/config";

function ForVerifyOtp() {
    const notify = () => {
        toast.success("OTP verified ✅");
    }
    let navigate = useNavigate();
    const userContextData = useContext(UserContext);
    const formik = useFormik({
        initialValues: {
            email: `${userContextData.mailid}`,
            otp: "",
        },
        validate: (values) => {
            let errors = {};
            if (!values.otp) {
                errors.otp = "Please enter your email";
            } else if (values.otp.length < 4) {
                errors.otp = "OTP is not valid";
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
                let verify = await axios.post(`${config.api}/reset/verifyotp`, values);
                if (verify.data) {
                    notify();
                    // alert("OTP verified ✅");
                    userContextData.setresetUser(verify.data);
                    navigate('/reset/resetPassword');
                } else {
                    alert(verify.data.message);
                }
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
            {/* <ToastContainer /> */}
            <div className="max-w-lg w-full mx-auto mt-4 bg-gray-800 p-10 rounded-2xl shadow-lg">
                <div className="text-start text-white mb-10 font-bold">
                    <img
                        style={{ display: "inline" }}
                        src="https://img.icons8.com/3d-fluency/30/000000/mail.png"
                    />
                    <span> Bulk Mailer App</span>
                </div>

                <p className="text-xl font-bold text-white block">
                    {" "}
                    Enter your OTP
                    <span className="text-sm text-gray-500">({userContextData.mailid})</span>
                </p>

                <div className="flex flex-col justify-center items-center">
                    <form
                        onSubmit={formik.handleSubmit}
                        className="w-full flex flex-row align-center"
                    >
                        <div className="flex flex-col w-5/6  m-4">
                            <label className="text-sm font-bold text-gray-600 block ">
                                OTP
                            </label>
                            <input
                                type={"text"}
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
                            // onClick={notify}
                            className=" w-2/6 mt-9 mb-4 bg-gray-500 hover:bg-gray-600 rounded-md text-white text-lg"
                        >
                            Verify
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForVerifyOtp