import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../config/firebase'
import firebase from 'firebase'

import copyIcon from '../assets/copy.svg'
import { TwitterPicker } from 'react-color'
import toast, { Toaster } from 'react-hot-toast';


const Dashboard = () => {

    const [data, setData] = useState({})

    const { firstName, lastName } = useUser();
    let username = (firstName + lastName).toLowerCase()
    const highlightsRef = db.collection(`users/data/${username}`)
    // const data = useCollectionData(highlightsRef);

    const [bio, setBio] = useState('')
    const [bgColor, setBgColor] = useState({ hex: '#ffffff' })
    const [lightType, setLightType] = useState('Highlights')
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')


    const getUserData = () => {
        highlightsRef.doc('info').get().then((doc) => {
            if (doc.exists) {
                setData(data => doc.data())
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }

    useEffect(() => {


    })


    const updateBio = () => {
        // console.log(bio, bgColor.hex)
        db.collection(`users/data/${username}`).doc('info').update({
            about: bio,
            background: bgColor.hex
        })
            .then(() => {
                toast.success('Successfully updated!')
            })
            .catch((error) => {
                toast.error('Something went wrong! ')
            });
    }



    const addToProfile = () => {
        console.log(title, details, lightType)

        if (lightType === 'Highlights') {

            db.collection(`users/data/${username}`).doc('info').update({
                highlights: firebase.firestore.FieldValue.arrayUnion({
                    title: title,
                    details: details
                })
            })
                .then(() => {
                    toast.success('Successfully added!')
                })
                .catch((error) => {
                    toast.error('Something went wrong! ')

                });


        } else if (lightType === 'Lowlights') {

            db.collection(`users/data/${username}`).doc('info').update({
                lowlights: firebase.firestore.FieldValue.arrayUnion({
                    title: title,
                    details: details
                })
            })
                .then(() => {
                    toast.success('Successfully added!')
                })
                .catch((error) => {
                    toast.error('Something went wrong! ')

                });
        }

    }



    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            <div className="p-10 flex md:flex-row flex-col justify-center bg-purple-100 mx-auto">

                <div className="bg-white rounded-lg p-4 pr-8 md:w-1/3">
                    <div className="flex flex-row items-center justify-center">
                        <Link to={`/profile/${username}`}>
                            <h1 className="rounded-lg w-auto border-2 p-2 px-16 text-center text-2xl font-bold border-indigo-400 my-4 hover:bg-indigo-400 hover:text-white bg-white">Visit My Page</h1>
                        </Link>
                        <img src={copyIcon} alt="copy" className="w-12 h-12 mx-2 cursor-pointer rounded-xl border-2 p-2 hover:border-pink-300 border-indigo-400" />

                    </div>

                    <h1 className="text-xl font-semibold m-2 ">A short Bio</h1>

                    <textarea
                        defaultValue={data?.about}

                        className="w-full p-2 text-xl border-2 m-1 h-40 rounded-lg bg-gray-50 px-4"
                        placeholder="Tell a little about yourself!"
                        onChange={(e) => setBio(e.target.value)}
                    />
                    {/* <button
                    onClick={updateBio}
                    className="text-xl bg-gray-700 p-2 my-2 m-1 rounded text-white w-full text-center"
                >
                    Update Bio
                </button> */}
                    <h1 className="text-xl font-semibold m-2 ">Color Theme</h1>
                    <div className="flex m-2">
                        <TwitterPicker
                            colors={['#9999ff', '#cc99ff', '#ffb3ff', '#ffd9b3', '#66ffb3', '#ffb380', '#aa80ff']}
                            color={bgColor}
                            onChangeComplete={(color) => setBgColor(color)}
                        />
                        <span style={{ backgroundColor: bgColor?.hex }} className="w-12 h-12 m-auto border-2 border-gray-700  mx-4 rounded"></span>
                    </div>

                    <button
                        onClick={updateBio}
                        className="text-xl bg-gray-700 p-2 my-2 m-1 rounded-xl text-white w-full text-center"
                    >
                        Update
                    </button>

                </div>

                <div className="md:w-2/3 md:mx-20 flex flex-col">




                    <div className=" bg-white h-auto flex flex-col justify-center rounded-xl p-10  ">

                        <select
                            onChange={(e) => setLightType(e.target.value)}
                            className="block border-2 p-2 my-2  rounded-xl text-xl w-full bg-white text-pink-400 font-semibold focus:outline-none"
                        >
                            <option className="font-semibold text-lg" >Highlights</option>
                            <option className="font-semibold text-lg">Lowlights</option>

                        </select>

                        <input
                            className="w-full p-2 text-xl border-2 m-1 my-2 rounded-lg bg-gray-50 px-4"
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
                            className="text-xl bg-gray-700 p-2 my-2 m-1 rounded-xl text-white w-auto mx-auto px-6 text-center"
                        >
                            Add to my Profile
                        </button>
                    </div>





                    <div className="bg-white rounded-xl p-4 mt-2 flex  items-center justify-center">
                        <h1 className="text-lg text-gray-400 italic font-semibold ">
                            Let your friends know about your highs and lows.
                        </h1>
                        <a className="mx-auto twitter-share-button font-bold bg-indigo-400 ml-auto mr-2 hover:bg-indigo-500 text-white text-md px-4 p-2 rounded-md  "
                            target="_blank" rel="noreferrer"
                            href={`https://twitter.com/intent/tweet?text=Hey, I created my profile on myhal , sharing the highlights and lowlights of my journey. https://myhal.vercel.app/profile/${username}`}
                            data-size="large">

                            Share on Twitter</a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;