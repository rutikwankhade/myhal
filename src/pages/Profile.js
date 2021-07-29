import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useParams } from 'react-router';
import Lights from '../components/Lights'


const Profile = () => {
    const { username } = useParams()

    const userRef = db.collection(`users/data/${username}`)
    const data = useCollectionData(userRef);

    const [user, setUser] = useState({})
    const [lights, setLights] = useState('highlights')



    useEffect(() => {
        if (data[0]) {
            setUser(data[0][0])
            console.log(data)
        }

    }, [data])


    return (
        <div style={ {backgroundColor:user?.background}} className="bg-purple-300  p-10 flex flex-row">
            <div className="sticky top-20 h-auto w-1/4 flex flex-col">
                <div className=" h-auto bg-white text-center border-2 border-gray-600  rounded-xl p-10 flex flex-col  items-center">
                    <img src={user?.photoURL} alt="me" className="w-20 h-20 rounded-full" />
                    <h1 className="text-2xl font-bold py-2">{user?.name || user?.userName}</h1>
                    <p className="text-gray-600 text-xl py-2">{user?.about}</p>
                </div>


                <div className="flex flex-row justify-center mt-2">
                    <div
                        onClick={() => setLights('highlights')}
                        className="w-1/2 cursor-pointer flex flex-col justify-center items-center h-32 m-2 bg-white rounded-xl border-2 border-gray-600 p-4">
                        <span className="text-4xl">✨</span>
                        <span className="text-xl font-bold my-2">Highlights</span>
                    </div>

                    <div
                        onClick={() => setLights('lowlights')}

                        className="cursor-pointer w-1/2 flex flex-col justify-center items-center h-32 m-2 bg-white rounded-xl border-2 border-gray-600 p-4">
                        <span className="text-4xl">🌊</span>
                        <span className="text-xl font-bold my-2">Lowlights</span>
                    </div>


                </div>

            </div>


            <div className="bg-white rounded-xl w-8/12 mx-6 p-10 border-2 border-gray-600   ">
                {
                    (lights === 'highlights') ?


                        <Lights
                            list={user?.highlights}
                            heading='Highlights'
                            tagline='Celebrating small wins'
                        /> :

                        <Lights
                            list={user?.lowlights}
                            heading='Lowlights'
                            tagline='Embracing the failures'

                        />
                }
            </div>


        </div>

    );
}

export default Profile;