import React, { useEffect } from 'react';


import { useUser } from '@clerk/clerk-react';

const Profile = () => {
    const { fullName, profileImageUrl } = useUser();


    useEffect(() => {

    }, [])

    return (
        <div className="h-full  p-10 flex flex-row">
            <div className="bg-white text-center border w-1/4 rounded-xl p-10 flex flex-col justify-center items-center">
                <img src={profileImageUrl} alt="me" className="w-20 h-20 rounded-full" />
                <h1 className="text-2xl font-bold py-2">{fullName}</h1>
                <p className="text-gray-600 text-xl py-2">Avid learner, loves building products, reads a lot</p>
            </div>

            <div className="bg-white rounded-xl w-8/12 mx-6 p-10 border">
                <h1 className="text-2xl font-semibold">My highlights</h1>

                <div class="relative mt-10 mx-auto">

                    <div class="border-r-4 border-gray-300  absolute h-full top-0" style={{ left: 10 }}></div>
                    <ul class="list-none m-0 p-0">
                        <li class="mb-4 text-lg ">
                            <div class="flex flex-row items-center ">
                                <div class="bg-gray-300 rounded-full h-6 w-6 "></div>
                                <div class="flex flex-col mx-4 shadow hover:bg-gray-50 border rounded p-4 w-full">
                                    <span className="text-pink-400 text-xl font-semibold mr-2">Jan 2020</span>
                                    <span className="font-medium text-gray-500">My side project got featured on profucthunt</span>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>


            </div>








        </div>

    );
}

export default Profile;