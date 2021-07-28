import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../config/firebase'

const Dashboard = () => {

    const { firstName, lastName } = useUser();
    let username = (firstName + lastName).toLowerCase()
    
    const [bio, setBio] = useState('')
    

    useEffect(() => 
    {
        console.log(bio)
    })


    const updateBio = () => {
        console.log(bio)
        db.collection(`users/data/${username}`).doc('info').update({
            about:bio
        })
        .then(() => {
    console.log("Document successfully updated!");
})
.catch((error) => {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
                  


        
    }


    return (
        <div className="p-10">



            <div className=" rounded-lg p-4 pr-8 md:w-1/3">
                <Link to={`/profile/${username}`}>
                    <h1 className="rounded-lg border-2 p-2 text-center text-2xl font-bold border-indigo-400 my-4 hover:bg-indigo-400 hover:text-white">Visit My Page</h1>
                </Link>

                <textarea
                    className="w-full p-2 text-xl border-2 m-1 h-40 rounded-lg bg-gray-50 px-4"
                    placeholder="A short bio"
                    onChange={(e)=>setBio(e.target.value)}
                />
                <button
                    onClick={updateBio}
                    className="text-xl bg-gray-700 p-2 my-2 m-1 rounded text-white w-full text-center"
                >
                    Update bio
                </button>



            </div>
        </div>
    );
}

export default Dashboard;