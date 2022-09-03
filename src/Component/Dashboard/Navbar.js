import React from 'react'

function Navbar() {
    return (

        <div className='flex flex-col'>
            <div className='flex flex-col bg-slate-500 '>
                <div className='flex flex-row space-x-3 justify-center shadow-lg'>
                    <ul className='flex flex-row text-gray-800 text-lg font-bold'>
                        <li className='p-4 hover:text-black hover:underline' >Mailer</li>
                        <li className='p-4 hover:text-black hover:underline' >Search</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Navbar