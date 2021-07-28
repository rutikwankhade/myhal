import React from 'react';
import { SignIn } from "@clerk/clerk-react";

const Signin = () => {
    return (
        <div className="bg-yellow-200 p-4">
            <SignIn className="" />

        </div>
    );
}

export default Signin;