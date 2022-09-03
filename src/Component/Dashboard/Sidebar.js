import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const gender = localStorage.getItem("gender");
  const navigate = useNavigate();
  const doLogout = () => {
    if (window.confirm("Do you really want to Logout?")) {
      try {
        localStorage.removeItem('token');
        localStorage.removeItem('gender');
        localStorage.removeItem('userName');
        localStorage.removeItem('id');
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
  }
  let avatar;
  if (gender == "male") {
    avatar = <img src="https://img.icons8.com/color/48/000000/user-male-skin-type-3.png" />
  }
  else {
    avatar = <img src="https://img.icons8.com/color/48/000000/user-female-skin-type-1-2.png" />
  }
  const userName = localStorage.getItem("userName");
  return (
    <>
      <Link to='/portal' className="flex flex-row item-center justify-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="justify-center text-xl mt-5 w-6 h-6"
        >
          <path
            stroke-linecap="round"
            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
          />
        </svg>

        <h2 className="text-start text-3xl pt-3 font-bold"> Mailer</h2>
      </Link>
      <div className="flex flex-col justify-between flex-auto">
        <div className="ml-2 my-5 bg-green">
          <Link to='/portal' className="flex flex-row rounded-lg bg-gray-500 mx-1 my-2 justify-center pt-2 hover:bg-gray-700 hover:text-red-700 text-white space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
              />
            </svg>

            <h4 className="pb-2 text-lg hover:text-red-700 text-white">
              Dashboard
            </h4>
          </Link>
          <Link to='/portal/recipients' className="flex flex-row justify-center rounded-lg bg-gray-500 mx-1 my-2 pt-2 hover:bg-gray-700 hover:text-red-700 text-white space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            <h4 className="pb-2 text-lg hover:text-red-700 text-white">
              Recipients
            </h4>
          </Link>
          <Link to='/portal/sendmail' className="flex flex-row pt-2 justify-center rounded-lg bg-gray-500 mx-1 my-2 hover:bg-gray-700 hover:text-red-700 text-white space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <h4 className="pb-2 text-lg hover:text-red-700 text-white">
              Send Mail
            </h4>
          </Link>
          <Link to='/portal/draft' className="flex flex-row pt-2 justify-center rounded-lg bg-gray-500 mx-1 my-2 hover:bg-gray-700 hover:text-red-700 text-white space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
            <h4 className="pb-2 text-lg hover:text-red-700 text-white">
              Draft
            </h4>
          </Link>
        </div>
        <div className="flex flex-col mb-5 py-2 justify-between">
          <div className=" flex mb-2 flex-row bg-white mx-2 px-5 rounded-3xl justify-around">
            {avatar}
            <h4 className="p-3 text-lg">{userName}</h4>
          </div>
          <button onClick={() => { doLogout() }} className="flex flex-row bg-white mx-10 m-2 mt-2 px-2 rounded-xl justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 my-3 mr-2 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
            <h4 className="py-2 text-lg">Log out</h4>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
