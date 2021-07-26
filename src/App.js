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

import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import Welcome from './pages/Welcome'
import Profile from './pages/Profile'


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
            {/* Public routes, accesible whether or not a user is signed in */}
            <Route exact path="/" component={Welcome} />
       

            <PrivateRoute path="/profile" Comp={Profile}>

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