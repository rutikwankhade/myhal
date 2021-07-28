import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../config/firebase'

const Dashboard = () => {

    const { firstName, lastName } = useUser();
    let username = (firstName + lastName).toLowerCase()

    const [bio, setBio] = useState('')
    const [lightType, setLightType] = useState('')
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')




    useEffect(() => {
        console.log(bio)
    })


    const updateBio = () => {
        console.log(bio)
        db.collection(`users/data/${username}`).doc('info').update({
            about: bio
        })
            .then(() => {
                console.log("Document successfully updated!");
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });

    }


    const addToProfile = () => {
        console.log(title, details, lightType)


    }


    return (
        <div className="p-10 flex md:flex-row flex-col justify-center">



            <div className=" rounded-lg p-4 pr-8 md:w-1/3">
                <Link to={`/profile/${username}`}>
                    <h1 className="rounded-lg border-2 p-2 text-center text-2xl font-bold border-indigo-400 my-4 hover:bg-indigo-400 hover:text-white bg-white">Visit My Page</h1>
                </Link>

                <textarea
                    className="w-full p-2 text-xl border-2 m-1 h-40 rounded-lg bg-gray-50 px-4"
                    placeholder="Tell a little about yourself!"
                    onChange={(e) => setBio(e.target.value)}
                />
                <button
                    onClick={updateBio}
                    className="text-xl bg-gray-700 p-2 my-2 m-1 rounded text-white w-full text-center"
                >
                    Update bio
                </button>



            </div>

            <div className="md:w-1/2 bg-white flex flex-col justify-center rounded-xl p-10 border-2 border-gray-200 md:mx-20">


                <select
                    onChange={(e) => setLightType(e.target.value)}
                    className="block border-2 p-2 my-2  rounded-xl text-xl w-full bg-white text-pink-400 font-semibold focus:outline-none"
                >
                    <option className="font-semibold text-lg" >Highlights</option>
                    <option className="font-semibold text-lg">Lowlights</option>


                </select>

                <input
                    className="w-full p-2 text-xl border-2 m-1  rounded-lg bg-gray-50 px-4"
                    placeholder="// Title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="w-full p-2 text-xl border-2 m-1 h-40 rounded-lg bg-gray-50 px-4"
                    placeholder="// Write more about it."
                    onChange={(e) => setDetails(e.target.value)}
                />

                <button
                    onClick={addToProfile}
                    className="text-xl bg-gray-700 p-2 my-2 m-1 rounded text-white w-auto mx-auto px-6 text-center"
                >
                    Add to my profile
                </button>
            </div>
        </div>
    );
}

export default Dashboard;