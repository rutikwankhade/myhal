import React,{useEffect} from 'react';
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserButton,
  useUser
} from '@clerk/clerk-react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import firebase from 'firebase/app';
import {config} from './firebase'


import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import Welcome from './pages/Welcome'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'




if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

// Retrieve Clerk settings from the environment
const clerkFrontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;


function App() {

  

  return (
    <div>

      <ClerkProvider frontendApi={clerkFrontendApi}>
        <SignedIn>
          <Navbar />
        </SignedIn>

        <Router>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/profile/:username" component={Profile} />



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