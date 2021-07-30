import React from 'react';
import { UserProfile } from "@clerk/clerk-react";

const ManageAccount = () => {
    return (
        <div className="bg-white">
            <UserProfile />
        </div>
    );
}

export default ManageAccount;