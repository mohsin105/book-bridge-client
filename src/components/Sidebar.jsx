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
            {user? (
                <ul className='space-y-4 my-4'>
                    <li>
                        <Link to={'/dashboard'}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/profile'}>Profile Page</Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/requests'}>Your Requests</Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/records'} >Your Records</Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/notifications'}>Notifications</Link>
                    </li>
                    <li>
                        <Link to={'/premium'} >Premium Membership</Link>
                    </li>
                </ul>
            ):(
                <ul className='space-y-4 my-4'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/books'}>Books</Link>
                    </li>
                    <li>
                        <Link to={'/sign-up'}>Sign Up</Link>
                    </li>
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Sidebar;