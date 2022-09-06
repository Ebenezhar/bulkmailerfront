import React, { useContext, useEffect } from 'react'
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from '../../UserContext/UserContext';
import axios from 'axios';
import { config } from '../../Config/config';

function EditRecipient() {
    const { id } = useParams();
    let navigate = useNavigate();
    const userContextData = useContext(UserContext);
    const emailPattern = new RegExp(/^\S+@\S+\.\S+$/);
    const handleRemove = (id) => {
        // let recipientIndex = tempList.findIndex(obj => obj.email == id);
        // tempList.splice(recipientIndex, 1);
        // userContextData.setAddTempRecipient([...tempList])
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            category: '',
        },
        validate: (values) => {
            let errors = {};
            if (!values.name) {
                errors.name = "Please enter your first name";
            } else if (values.name.length < 5) {
                errors.name = "Length must be at least 5 characters";
            }
            if (!values.email) {
                errors.email = "Please enter your email";
            } else if (!emailPattern.test(formik.values.email)) {
                errors.email = "Email is not valid";
            }
            // else if (tempList.some(({ email }) => { email == values.email })) {
            //     errors.email = "Duplicate";
            // }
            // const duplicate2 = currentRecipientList.some(({ email }) => { email == values.email });
            // if (duplicate2) {
            //     errors.email = "Email already exists";
            // }
            if (!values.category) {
                errors.category = "Please Enter a category";
            }
            return errors;

        },
        onSubmit: async (values) => {
            try {
                console.log(values);
                let result = await axios.put(`${config.api}/portal/editrecipient/${id}`, values, {
                    headers: {
                        'Authorization': `${localStorage.getItem('token')}`
                    }
                });
                alert(result.data.message);
                navigate('/portal/recipients');

            } catch (error) {
                console.log(error);
            }

        }
    })
    useEffect(() => {
        const index = userContextData.recipients.findIndex((obj) => obj._id == id);
        formik.setValues(userContextData.recipients[index]);
    }, []);
    return (
        <div className='flex flex-col w-full h-full'>
            <div className='flex flex-col flex-wrap bg-white px-4 py-2 justify-center'>
                <h4 className="text-lg mt-3 mx-2 font-bold text-black block">Enter the Recipient Details</h4>

                <form
                    onSubmit={formik.handleSubmit}
                    className="flex flex-wrap align-center"
                >
                    <div className="flex flex-col m-2 w-2/12">
                        <label className="text-sm font-bold text-gray-600 block">
                            Name
                        </label>
                        <input
                            type={"text"}
                            name={"name"}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            className="w-full p-2 border  bg-gray-600 border-gray-300 rounded mt-0 font-medium text-white"
                            placeholder="john"
                        />
                        {formik.errors.name ? (
                            <span className="text-red-500 text-xs italic">
                                {" "}
                                {formik.errors.name}
                            </span>
                        ) : null}
                    </div>
                    <div className="flex flex-col m-2 w-4/12">
                        <label className="text-sm font-bold text-gray-600 block">
                            Email
                        </label>
                        <input
                            type={"text"}
                            name={"email"}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            className="w-full p-2 border  bg-gray-600 border-gray-300 rounded mt-0 font-medium text-white"
                            placeholder="abc@example.com"
                        />
                        {formik.errors.email ? (
                            <span className="text-red-500 text-xs italic">
                                {" "}
                                {formik.errors.email}
                            </span>
                        ) : null}
                    </div>
                    <div className="flex flex-col m-2 w-2/12">
                        <label className="text-sm font-bold text-gray-600 block">
                            Category
                        </label>
                        <input
                            type={"text"}
                            name={"category"}
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            className="w-full p-2 border  bg-gray-600 border-gray-300 rounded mt-0 font-medium text-white"
                            placeholder="Sales, Business, Tech..."
                        />
                        {formik.errors.category ? (
                            <span className="text-red-500 text-xs italic">
                                {" "}
                                {formik.errors.category}
                            </span>
                        ) : null}
                    </div>
                    <button className="flex flex-row justify-center mx-3 py-2 px-2 mb-2 mt-7 bg-gray-500 hover:bg-gray-600 rounded-md text-white text-lg">
                        <p className='font-bold px-1' type={"submit"}> Save Changes</p>
                    </button>
                </form>
            </div>

        </div>
    )
}

export default EditRecipient