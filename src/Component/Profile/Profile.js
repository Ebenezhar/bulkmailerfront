import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { config } from '../../Config/config';
import UserContext from '../../UserContext/UserContext';

function Profile() {
    const gender = localStorage.getItem("gender");
    const userContextData = useContext(UserContext);
    console.log(userContextData.profile);
    useEffect(() => {
        fetchData();
    }, [])
    let fetchData = async () => {
        try {
            let userData = await axios.get(`${config.api}/portal/userdetails`, {
                headers: {
                    'Authorization': `${localStorage.getItem('token')}`
                }
            });
            userContextData.setProfile(userData.data);
            console.log(userContextData.profile);
        } catch (error) {
            console.log(error);
        }

    }
    let avatar;
    if (gender == "male") {
        avatar = <img src="https://img.icons8.com/color/160/000000/user-male-skin-type-3.png" />
    }
    else {
        avatar = <img src="https://img.icons8.com/color/160/000000/user-female-skin-type-1-2.png" />
    }
    return (
        <div className='flex m-2 bg-slate-100 rounded-lg items-center justify-center p-3 flex-col w-full h-full'>
            <div className="rounded-3xl overflow-hidden shadow-xl max-w-md my-3 bg-gray-800 pb-5">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrovkJG7lnWV2POzUl8pY4_KnN0HR01Jp7GA&usqp=CAU" className="w-full object-fill" />
                <div className="flex justify-center -mt-20 ">
                    {avatar}
                    {/* <img src="https://i.imgur.com/8Km9tLL.jpg" className="rounded-full border-solid border-white border-2 -mt-3" /> */}
                </div>
                <div className="text-center px-3 pb-6 pt-2">
                    <h3 className="text-white font-bold  text-lg bold ">Name: <span className='tracking-widest font-serif'>{userContextData.profile.firstName}</span></h3>
                    <p className="mt-2 font-sans font-bold text-white">Mail id: <span className='font-light font-serif'>{userContextData.profile.email}</span></p>
                </div>
                <div className='flex justify-center pb-3 text-white flex-wrap font-bold'>
                    <div className="text-center justify-center flex flex-row w-1/3 mr-3 pr-3">
                        <h2>Country: </h2>
                        <span className='font-light font-serif'> {userContextData.profile.country}</span>
                    </div>
                    <div className="text-center justify-center flex flex-row mr-3  pr-3 w-1/3">
                        <h2>Age: </h2>
                        <span className='font-light font-serif'> {userContextData.profile.age}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile