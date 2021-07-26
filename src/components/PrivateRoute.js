import React from 'react';
import {
    RedirectToSignIn,
    SignedIn,
    SignedOut,

} from '@clerk/clerk-react';
import { Route } from 'react-router-dom'

// If the route matches but the user is not signed in, redirect to /sign-in

const PrivateRoute = ({path, Comp}) => {
    return (
        <>
            <SignedIn>
                <Route exact path={path} component={Comp} />
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
}

export default PrivateRoute;