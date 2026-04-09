import React from 'react';
import { Link } from 'react-router';
import useAuthContext from '../hooks/useAuthContext';

const Sidebar = () => {
    const {user} = useAuthContext();
    return (
        <div className='p-8 w-full text-lg font-semibold'>
            {user && (
                <h1>Welcome {user.first_name}</h1>
            )}
            <ul className='space-y-4 my-4'>
                <li>
                    <Link to={'/dashboard'}>Dashboard</Link>
                </li>
                <li>
                    <Link to={'/profile'}>Profile Page</Link>
                </li>
                <li>
                    <Link to={'/requests'}>Your Requests</Link>
                </li>
                <li>
                    <Link to={'/records'} >Your Records</Link>
                </li>
                <li>
                    <Link to={'/notifications'}>Notifications</Link>
                </li>
                <li>
                    <Link to={'/premium'} >Premium Membership</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;