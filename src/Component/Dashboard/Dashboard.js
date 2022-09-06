import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { config } from '../../Config/config';

import UserContext from '../../UserContext/UserContext';

function Dashboard() {
    const userContextData = useContext(UserContext);
    useEffect(() => {
        fetchData();
    }, [])
    let fetchData = async () => {
        let userData = await axios.get(`${config.api}/portal/recipients/`, {
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        });
        userContextData.setRecipient(userData.data);
    }
    return (
        <div className='flex m-2 bg-slate-100 rounded-lg p-3 flex-col w-full h-full'>
            <h1 className='text-gray-900 text-3xl p-2 font-bold'>Dashboard</h1>
        </div>
    )
}

export default Dashboard