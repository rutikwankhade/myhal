import React,{useEffect} from 'react';
import { Link } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react';
import firebase from "firebase";


const Dashboard = () => {
    // const { username } = useUser()
    // console.log(user)

    const user = useUser();
  
  useEffect(() => {
        const signInWithClerk = async function(){
            const firebaseClerkToken = await user.getToken("firebase");
            const userCredentials = await firebase
              .auth()
              .signInWithCustomToken(firebaseClerkToken);
            /**  
             * The userCredentials.user object will call the methods of
             * the Firebase platform as an authenticated user.
             */
        }
        
        signInWithClerk();
    }, [user]);
    return (
        <div>
            <h1>Dashboard</h1>
            {/* <Link to={`profile/${username}` }>Visit my profile</Link> */}
        </div>
     );
}
 
export default Dashboard;