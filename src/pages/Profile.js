import React,{useEffect, useState} from 'react';
import EventCard from '../components/EventCard';
import {db} from '../config/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';


const Profile = () => {

    const userRef = db.collection(`users/rutikwankhade2@gmail.com/info`)
         const data = useCollectionData(userRef);

    
    const [user, setUser]= useState({})


    useEffect(() => {
        if (data[0]) {
            setUser(data[0][0])

        }

       

        
    },[data])


    return (
        <div className="bg-purple-300  p-10 flex flex-row">
            <div className="sticky top-20 bg-white text-center border-2 border-gray-600 w-1/4 rounded-xl p-10 flex flex-col h-full items-center">
                <img src={user?.photoURL} alt="me" className="w-20 h-20 rounded-full" />
                <h1 className="text-2xl font-bold py-2">{user?.name}</h1>
                <p className="text-gray-600 text-xl py-2">Avid learner, loves building products, reads a lot</p>
            </div>

            <div className="bg-white rounded-xl w-8/12 mx-6 p-10 border-2 border-gray-600   ">

                <div className="flex">
                    <h1 className="text-4xl m-2 font-semibold">🏆 </h1>

                    <div>
                        <h1 className="text-2xl font-semibold">Highlights</h1>

                        <p className="italic text-gray-400">Celebrating small wins</p>
                    </div>

                </div>


                <div class="relative mt-10 mx-auto ">

                    <div class="border-r-4 border-gray-300  absolute h-full top-0" style={{ left: 10 }}></div>
                    <ul class="list-none m-0 p-0">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />


                    </ul>
                </div>


            </div>








        </div>

    );
}

export default Profile;