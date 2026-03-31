import React from 'react';

const Sidebar = () => {
    return (
        <div className='p-8 w-full text-lg font-semibold'>
            <h1>This is Sidebar</h1>
            <ul className='space-y-4'>
                <li>Dashboard</li>
                <li>Profile</li>
                <li>Your Profile</li>
                <li>Your Requests</li>
                <li>Your Records</li>
                <li>Your Account</li>
            </ul>
        </div>
    );
};

export default Sidebar;