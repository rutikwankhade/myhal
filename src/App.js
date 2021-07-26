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

// Retrieve Clerk settings from the environment
const clerkFrontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

function App() {
  return (
    <div>

      <Router>
        <ClerkProvider frontendApi={clerkFrontendApi}>

          <Switch>
            {/* Public routes, accesible whether or not a user is signed in */}
            <Route path="/public">
              <div>
                Reached the public route. <Link to="/">Return home.</Link>
              </div>
            </Route>

            {/* Private routes, accesible only if a user is signed in */}
            <PrivateRoute path="/private">
              <div>
                Reached the private route. <Link to="/">Return home.</Link>
              </div>
            </PrivateRoute>

            {/* Catch-all route will render if no other route renders */}
            <Route>
              <SignedIn>
                <Navbar />

                <div>You are signed in. You can access both routes.</div>
                <Navigation />
              </SignedIn>
              <SignedOut>
                <div>You are signed out. You can access the public route.</div>
                <Navigation />
              </SignedOut>
            </Route>
          </Switch>
        </ClerkProvider>
      </Router>
    </div>

  );
}


function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/public">Public route</Link>
      </li>
      <li>
        <Link to="/private">Private route</Link>
      </li>
    </ul>
  );
}



export default App;