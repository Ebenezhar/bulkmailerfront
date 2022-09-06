import React, { useContext } from 'react'
import UserContext from '../../UserContext/UserContext';

function RecipientCard({ data }) {
    const userContextData = useContext(UserContext);
    let recipientsList = userContextData.recipients;
    const handleAdd = (recipientId) => {
        let recipientIndex = recipientsList.findIndex(obj => obj._id == recipientId);
        let recipient = recipientsList[recipientIndex];
        userContextData.setReceivers([...userContextData.receivers, recipient])
        recipientsList.splice(recipientIndex, 1);
    }
    return (
        <div className='w-full justify-between flex flex-row text-gray-700 bg-gray-300 hover:text-gray-300 hover:bg-gray-700 rounded-lg m-1 px-3 py-1'>
            <div className='flex w-5/6 flex-row'>
                <h5 className='text-lg font-bold'>{data.name}:</h5>
                <p className='text-lg px-1 flex flex-wrap'>{data.email}</p>
            </div>
            <button
                onClick={() => handleAdd(data._id)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
    )
}

export default RecipientCard