import React from 'react'
import { useFormik } from "formik";

function SendMail() {
    const formik = useFormik({
        initialValues: {
            message: "",
        }
    })
    return (
        <div className='flex m-2 bg-slate-100 rounded-lg p-3 flex-col w-full h-full'>
            <h1 className='text-gray-900 text-3xl p-2 font-bold'>Mail Box</h1>
            <div className='flex flex-row'>
                <div className='flex flex-col p-3 min-h-full w-3/4'>
                    <form
                        onSubmit={formik.handleSubmit}
                        className='flex flex-wrap'>
                        <textarea
                            type={"text"}
                            rows={"6"} cols={"50"}
                            className="w-full p-2 border-2 border-gray-800 shadow-lg font-mono rounded-lg "
                            name={'answer'}
                            onChange={formik.handleChange}
                            value={formik.values.answer}
                            placeholder="Your message..."
                        />
                        {
                            formik.errors.answer ? <span style={{ color: 'red' }}> {formik.errors.answer}</span> : null
                        }
                    </form>
                    <button
                        type={"submit"}
                        className=" flex flex-row w-2/12 p-2 mt-9 mx-1 bg-gray-500 hover:bg-gray-600 rounded-md text-white justify-center"
                    >
                        <p className="font-2xl font-bold">Send Mail</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 ml-2 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </button>
                    <div id='receivers' className='flex p-4 rounded-md flex-wrap'>
                        <p className="text-xl m-1 font-bold text-black block"> To</p>
                    </div>
                </div>
                <div className="flex flex-col border-l-2 py-2 px-1">
                    <p className="text-xl m-1  font-bold text-black block"> Recipients List</p>
                </div>
            </div>

        </div>
    )
}

export default SendMail 