import React, {useEffect} from 'react';


import { useUser } from '@clerk/clerk-react';

const Profile = () => {
                const {fullName, profileImageUrl} = useUser();


    useEffect(() => {
        
    },[])

    return (
        <div className="bg-indigo-400 p-10 flex flex-row">
            <div className="bg-white w-1/4 rounded-xl p-10 flex flex-col justify-center items-center">
            <img src={profileImageUrl} alt="me" className="w-20 h-20 rounded-full"/>
                <h1 className="text-2xl font-bold">{ fullName}</h1>
            </div>

            <div className="bg-white rounded-xl w-8/12 mx-6 p-10">
                <h1 className="text-2xl">my highlights</h1>
            </div>


        </div>        

     );
}
 
export default Profile;