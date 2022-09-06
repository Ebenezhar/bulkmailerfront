import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import DraftCard from './DraftCard';
import { config } from '../../Config/config';
import UserContext from '../../UserContext/UserContext';

function Draft() {
    const userContextData = useContext(UserContext);
    let handledelete = async (draftId) => {
        try {
            let ask = window.confirm("Are you sure you want to delete this draft ?");
            if (ask) {
                let result = await axios.delete(`${config.api}/portal/deletedraft/${draftId}`, {
                    headers: {
                        'Authorization': `${localStorage.getItem('token')}`
                    }
                });
                alert(result.data.message);
                fetchData();             // fetchData();
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
    let fetchData = async () => {
        let userData = await axios.get(`${config.api}/portal/draftedmails`, {
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        });
        console.log(userData.data.message);
        userContextData.setDraftedMails(userData.data);
    }
    return (
        <div className='flex m-2 bg-slate-100 rounded-lg p-3 flex-col w-full h-full'>
            <h1 className='text-gray-900 text-3xl p-2 font-bold'>Drafts</h1>
            {
                userContextData.draftedMails.map((draft) => {
                    return (<DraftCard data={draft} handledelete={handledelete} />)
                })
            }
        </div>
    )
}

export default Draft