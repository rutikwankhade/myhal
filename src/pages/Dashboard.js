import React,{useEffect} from 'react';
import { Link } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react';
import firebase from "firebase";
import { useDetails } from '../hooks/Details'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {db} from '../config/firebase'

const Dashboard = () => {
    const { username } = useUser();
    
    return (
        <div className="p-10">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <Link to={`profile/${username}` }>Visit my profile</Link>
        </div>
     );
}
 
export default Dashboard;