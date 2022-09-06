import React from 'react'

function DraftCard({ data, handledelete }) {
    return (
        <div className='flex m-2 mr-10 bg-slate-500 rounded-lg p-3 flex-col w-full text-lg'>
            <div className='p-2'>
                {/* <h4 className="font-bold text-lg">Draft: </h4> */}
                {data.message}
            </div>
            <div className='flex justify-end'>
                <button
                    // onClick={() => props.handleAddToCart(data.id)}
                    onClick={() => handledelete(data._id)}
                    className="flex flex-row bg-red-600 px-2 mr-2 rounded-lg text-black font-bold hover:bg-red-700 hover:font-bolder"
                >
                    Delete
                </button>
            </div>
        </div>

    )
}

export default DraftCard