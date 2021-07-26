import React from 'react';
import { UserButton, SignedIn, useUser } from '@clerk/clerk-react';
const Navbar = () => {
      const { firstName } = useUser();

    return (
        <div className="p-4 px-40 flex bg-gray-50">
            <h1 className="text-2xl mr-auto ml-2 italic font-mono font-bold ">Myhal</h1>
            <SignedIn>
                <h1 className="text-2xl mx-4 font-semibold">{firstName}</h1>
                <UserButton className="w-10"/>
                </SignedIn>
        </div>
     );
}
 
export default Navbar;