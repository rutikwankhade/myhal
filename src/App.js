import React, { useEffect } from 'react';
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  useUser
} from '@clerk/clerk-react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { db, config } from "./config/firebase";
import firebase from "firebase";

import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import Welcome from './pages/Welcome'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import { useCollectionData } from 'react-firebase-hooks/firestore';


// Retrieve Clerk settings from the environment
const clerkFrontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

const App = () => {

  console.log(config)

  useEffect(() => {
    console.log(window.Clerk)
    if (window.Clerk?.user) {
      db.collection("users")
        .doc(window.Clerk.user.primaryEmailAddress.emailAddress)
        .set(
          {
            email: window.Clerk.user.primaryEmailAddress.emailAddress,
            name: window.Clerk.user.fullName,
            lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
            photoURL: window.Clerk.user.profileImageUrl,
            userName: window.Clerk.user.username,
          },
          { merge: true }
        );
    }




  });

  return (
    <div>

      <ClerkProvider frontendApi={clerkFrontendApi}>

        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/profile/:username" component={Profile} />
            <Route exact path="/signin" component={Signin} />

            <PrivateRoute path="/dashboard" Comp={Dashboard}>

            </PrivateRoute>

            {/* Catch-all route will render if no other route renders */}
            <Route>
              <SignedIn>

              </SignedIn>
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