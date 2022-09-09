import React, { useContext } from 'react'
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import UserContext from '../../UserContext/UserContext';
import axios from 'axios';
import { config } from '../../Config/config';

function AddRecipient() {
    let navigate = useNavigate();
    const userContextData = useContext(UserContext);
    const tempList = userContextData.AddTempRecipient;
    const emailPattern = new RegExp(/^\S+@\S+\.\S+$/);
    const handleRemove = (id) => {
        let recipientIndex = tempList.findIndex(obj => obj.email == id);
        tempList.splice(recipientIndex, 1);
        userContextData.setAddTempRecipient([...tempList])
    }
    const addToRecipientList = async () => {
        const tempList = userContextData.AddTempRecipient;
        const update = await axios.post(`${config.api}/portal/addRecipients`, tempList, {
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        });
        alert(`${update.data.message}`);
        if (update) {
            userContextData.setAddTempRecipient([]);
            navigate('/portal');
        }
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
            values.ownerId = localStorage.getItem("id")
            userContextData.setAddTempRecipient([...userContextData.AddTempRecipient, values])

        }
    })
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
                        {

                        }
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        <p className='font-bold px-1'> Add</p>
                    </button>
                </form>
                <table className="w-full border-1 mt-4 border-black text-lg text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-lg text-gray-700 uppercase  bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-2 px-5">Name</th>
                            <th scope="col" className="py-2 px-5">Email</th>
                            <th scope="col" className="py-2 px-5">Category</th>
                            <th scope="col" className="py-2 px-5">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userContextData.AddTempRecipient.map((recipient) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td scope="row" className="py-2 px-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">{recipient.name}</td>
                                        <td className="py-2 px-5">{recipient.email}</td>
                                        <td className="py-2 px-5">{recipient.category}</td>
                                        <td className="py-2 px-5">
                                            <button
                                                onClick={() => handleRemove(recipient.email)}
                                                className="flex flex-row bg-red-600 px-2 rounded-lg text-black font-bold hover:bg-red-700 hover:font-bolder"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-6 hover:font-bolder h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <button onClick={() => addToRecipientList()} className="flex w-3/12 justify-center mx-5 py-2 px-2 mb-2 mt-7 bg-gray-500 hover:bg-gray-600 rounded-md text-white text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 mr-1 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
                <p className='font-bold px-1'> Add to Recipient List</p>
            </button>
        </div>
    )
}

export default AddRecipient