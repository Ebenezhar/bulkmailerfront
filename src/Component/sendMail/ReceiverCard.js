import React, { useContext } from 'react'
import UserContext from '../../UserContext/UserContext';

function ReceiverCard({ data }) {
    const userContextData = useContext(UserContext);
    let receiversList = userContextData.receivers;
    const handleRemove = (receiverId) => {
        let receiverIndex = receiversList.findIndex(obj => obj._id == receiverId);
        let receiver = receiversList[receiverIndex];
        userContextData.setRecipient([...userContextData.recipients, receiver])
        receiversList.splice(receiverIndex, 1);
    }
    return (
        <div className='justify-between flex flex-row text-gray-700 bg-gray-300 hover:text-gray-300 hover:bg-gray-700 rounded-lg m-1 px-3 py-1'>
            <div className='flex flex-row'>
                <h5 className='text-lg font-bold'>{data.name}:</h5>
                <p className='text-lg px-1 '>{data.email}</p>
            </div>
            <button
                onClick={() => handleRemove(data._id)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

            </button>
        </div>
    )
}

export default ReceiverCard