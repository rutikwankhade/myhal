import React from 'react';
import { UserButton, SignedIn, SignedOut } from '@clerk/clerk-react';
import titleImg from '../assets/title.png'
import {Link} from 'react-router-dom'
const Navbar = () => {

    return (
        <div className="p-4 md:px-20 flex bg-white  border-gray-600">
            <img src={titleImg} alt="myhal" className="w-1/4 ml-2 mr-auto"/>
            <SignedIn>
                <UserButton className="w-10"/>
            </SignedIn>
            <SignedOut>
                <Link to="/signin">
                    <button className="bg-gray-700 text-white rounded p-2 px-6 text-xl font-semibold">Sign in</button>
                </Link>
            </SignedOut>
        </div>
     );
}
 
export default Navbar;