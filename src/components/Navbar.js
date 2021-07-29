import React from 'react';
import { UserButton, SignedIn, SignedOut } from '@clerk/clerk-react';
import { Link } from 'react-router-dom'

import yinyangIcon from '../assets/yinyang.png'
const Navbar = () => {

    return (
        <div className="p-4 items-center md:px-24 flex flex-row bg-white  border-gray-200 border-b-2">
            <Link to="/dashboard" className="flex mx-2 items-center w-1/4 mr-auto ml-2">
                <img src={yinyangIcon} alt="/" className="w-6 h-6 opacity-80"/>
                <h1 className="font-inter font-extrabold text-3xl text-gray-600 mx-2">myhal</h1>
            </Link>

            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <Link to="/signin">
                    <button className="w-32 bg-pink-400 hover:bg-pink-500 border-white border-2 text-white rounded-lg p-2 px-6 text-xl font-semibold transform hover:scale-105 duration-300 ease-in-out">Sign in</button>
                </Link>
            </SignedOut>
        </div>
    );
}

export default Navbar;