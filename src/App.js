import React, { useEffect } from 'react';
import {
  ClerkProvider,
  SignedOut,
} from '@clerk/clerk-react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { db } from "./config/firebase";
// import firebase from "firebase";

import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import Welcome from './pages/Welcome'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ManageAccount from './pages/ManageAccount'


// import { useCollectionData } from 'react-firebase-hooks/firestore';


// Retrieve Clerk settings from the environment
const clerkFrontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

const App = () => {


  useEffect(() => {
    if (window.Clerk?.user) {

      console.log(window.Clerk.user)
      let fullname = window.Clerk.user.firstName + window.Clerk.user.lastName
      let username = fullname.toLowerCase();

      db.collection(`users/data/${username}`).doc('info').set(
        {
          email: window.Clerk.user.primaryEmailAddress.emailAddress,
          name: window.Clerk.user.fullName,
          photoURL: window.Clerk.user.profileImageUrl,
          userName: username,
          highlights: [],
          lowlights: [],
        },
        { merge: true }
      )
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    }

  }, []);


  return (
    <div>

      <ClerkProvider frontendApi={clerkFrontendApi}>

        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/profile/:username" component={Profile} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />

            <PrivateRoute path="/dashboard" Comp={Dashboard} />
            <PrivateRoute path="/manage-account" Comp={ManageAccount} />



            {/* Catch-all route will render if no other route renders */}
            <Route>

              <SignedOut>
                <div>You are signed out. You can access the public route.</div>
              </SignedOut>
            </Route>
          </Switch>
        </Router>

      </ClerkProvider>
    </div>

  );
}


export default App;