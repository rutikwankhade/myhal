import React from 'react';
import { UserButton, SignedIn, SignedOut } from '@clerk/clerk-react';
import titleImg from '../assets/title.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

    return (
        <div className="p-4 md:px-20 flex  bg-white  border-gray-700 border-b-2">
            <Link to="/" className="ml-2 mr-auto">
                <img src={titleImg} alt="myhal" className="w-1/4 " />
            </Link>

            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <Link to="/signin">
                    <button className="w-40 bg-gray-700 text-white rounded p-2 px-6 text-xl font-semibold">Sign in</button>
                </Link>
            </SignedOut>
        </div>
    );
}

export default Navbar;