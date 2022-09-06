import React, { useContext } from 'react'
import { useFormik } from "formik";
import RecipientCard from './RecipientCard';
import UserContext from '../../UserContext/UserContext';
import ReceiverCard from './ReceiverCard';
import axios from 'axios';
import { config } from '../../Config/config';

function SendMail() {
    const userContextData = useContext(UserContext);

    const addToDraft = async (values) => {
        values.ownerId = localStorage.getItem("id")
        try {
            let result = await axios.post(`${config.api}/portal/addtodraft`, values, {
                headers: {
                    'Authorization': `${localStorage.getItem('token')}`
                }
            });
            alert(result.data.message);
        } catch (error) {
            console.log(error);
        }

    }
    const formik = useFormik({
        initialValues: {
            message: "",
        },
        validate: (values) => {
            let errors = {};
            if (!values.message) {
                errors.message = "Please enter the message"
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
                values.receivers = userContextData.receivers;
                let result = await axios.post(`${config.api}/portal/sendmail`, values, {
                    headers: {
                        'Authorization': `${localStorage.getItem('token')}`
                    }
                });
                alert(result.data.message);
                userContextData.setReceivers([]);
            } catch (error) {
                console.log(error);
            }
        }
    })
    return (
        <div className='flex  m-2 bg-slate-100 rounded-lg p-3 flex-col w-full h-full'>
            <h1 className='text-gray-900 text-3xl p-2 font-bold'>Mail Box</h1>
            <div className='flex  flex-row'>
                <div className='flex flex-col w-3/6 p-3 min-h-full'>
                    <form
                        onSubmit={formik.handleSubmit}
                        className='flex flex-wrap'>
                        <textarea
                            type={"text"}
                            rows={"6"} cols={"50"}
                            className="w-full p-2 border-2 border-gray-800 shadow-lg font-mono rounded-lg "
                            name={'message'}
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            placeholder="Your message..."
                        />
                        {formik.errors.message ? (
                            <span className="text-red-500 text-lg italic px-2">
                                {" "}
                                {formik.errors.message}
                            </span>
                        ) : null}
                        <div className='flex w-full justify-between flex-row'>
                            <button
                                type={"submit"}
                                className=" flex flex-row p-2 mt-9 mx-1 bg-gray-500 hover:bg-gray-600 rounded-md text-white justify-center"
                            >
                                <p className="font-2xl font-bold">Send Mail</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 ml-2 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                            </button>
                            <button
                                onClick={() => addToDraft(formik.values)}
                                className=" flex flex-row p-2 mt-9 mx-1 bg-gray-500 hover:bg-gray-600 rounded-md text-white justify-center"
                            >
                                <p className="font-2xl font-bold">Save as Draft</p>

                            </button>
                        </div>
                    </form>

                    <div id='receivers' className='flex flex-col p-4 rounded-md flex-wrap'>
                        <p className="text-xl m-1 font-bold text-black block"> To</p>
                        <div className='flex flex-wrap'>
                            {
                                userContextData.receivers.map((receiver) => {
                                    return (<ReceiverCard data={receiver} />)
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="w-3/6 flex flex-col border-l-2 py-2 px-2">
                    <p className="text-xl my-1  font-bold text-black block"> Recipients List</p>
                    {
                        userContextData.recipients.map((recipient) => {
                            return (<RecipientCard data={recipient} />)
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SendMail 