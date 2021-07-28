import React from 'react';
import {
    SignedIn,
    SignedOut,

} from '@clerk/clerk-react';
import { Route } from 'react-router-dom'
import Signin from '../pages/Signin'

// If the route matches but the user is not signed in, redirect to /sign-in

const PrivateRoute = ({ path, Comp }) => {
    return (
        <>
            <SignedIn>
                <Route exact path={path} component={Comp} />
            </SignedIn>

            <SignedOut>
                {/* <RedirectToSignIn /> */}
                <Route exact path='/signin' component={Signin} />
            </SignedOut>
        </>
    );
}

export default PrivateRoute;