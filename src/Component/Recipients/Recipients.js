import React from 'react'
import { useFormik } from "formik";
import { Link } from 'react-router-dom';

function Recipients() {
    const formik = useFormik({
        initialValues: {
            keyword: ""
        },
    })
    return (
        <div className='flex m-2 bg-slate-100 rounded-lg p-3 flex-col w-full h-full'>
            <h1 className='text-gray-900 text-3xl p-2 font-bold'>Recipients</h1>
            <div className='flex flex-row flex-wrap px-4 py-2 justify-between'>
                <>
                    <form
                        className='flex flex-row space-x-3 items-center'
                        onSubmit={formik.handleSubmit}>
                        <input
                            type={"text"}
                            name={"email"}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            className="w-full p-2 border bg-gray-600 border-gray-300 rounded mt-0 font-medium text-white"
                            placeholder=""
                        />
                        <button
                            type={"submit"}
                            className=" p-2 bg-gray-500 hover:bg-gray-600 rounded-md hover:font-bold text-white text-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 hover:font-bold h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>

                        </button>
                    </form>
                </>
                <Link to='/portal/recipients/addrecipients' className='flex items-center py-2 px-4 mt-4 ml-4 bg-gray-500 hover:bg-gray-600 hover:font-bold rounded-md text-white text-lg"'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 mr-2 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                    </svg>
                    Add Recipients</Link>
            </div>

            <table class="w-full border-1 mt-1 border-black text-lg text-left text-gray-500 dark:text-gray-400">
                <thead class="text-lg text-gray-700 uppercase  bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-2 px-5">S.No</th>
                        <th scope="col" class="py-2 px-5">Name</th>
                        <th scope="col" class="py-2 px-5">Email</th>
                        <th scope="col" class="py-2 px-5">Category</th>
                        <th scope="col" class="py-2 px-5">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="py-2 px-5">1</td>
                        <td scope="row" class="py-2 px-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">Witchy Woman</td>
                        <td class="py-2 px-5">The Eagles</td>
                        <td class="py-2 px-5">Sales</td>
                        <td class="py-2 px-5">1972</td>
                    </tr>
                </tbody>
            </table>


        </div >
    )
}

export default Recipients