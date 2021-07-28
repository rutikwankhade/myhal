import React,{useEffect} from 'react';
import { Link } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react';
import firebase from "firebase";
import { useDetails } from '../hooks/Details'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {db} from '../config/firebase'

const Dashboard = () => {
    // console.log(user)
    // const { username } = useUser();
    //   const listRef = db.collection(`users/${username}/list`)
    // const [list] = useCollectionData(listRef, { idField: "id" });
    //  listRef.add({
    //         name: 'rutik'
           
    //         // createdAt: firestore.FieldValue.serverTimestamp()

    //     })

    // const { details, error } = useDetails()
   
         
        
       

  

    
    return (
        <div>
            <h1>Dashboard</h1>
            {/* <Link to={`profile/${username}` }>Visit my profile</Link> */}
        </div>
     );
}
 
export default Dashboard;