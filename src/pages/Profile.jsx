import React from 'react';
import useAuthContext from '../hooks/useAuthContext';

const Profile = () => {
    const {user} = useAuthContext();
    return (
        <section className='w-11/12 mx-auto'>
            <h1 className='text-4xl font-semibold text-center'>Profile Page</h1>
            {/* Profile Section */}
            <div className='grid grid-cols-2 gap-8 p-4 rounded-md bg-gray-50 border-gray-400'>
                <div className=''>

                </div>
                <div className='space-y-4'>
                    <h3>
                        {user.first_name} {user.last_name}
                    </h3>
                    <p><span className='font-semibold'>Phone number: </span>{user.phone_number}</p>
                    <p><span className='font-semibold'>Address: </span>{user.address}</p>
                    <p><span className='font-semibold'></span></p>
                    <p><span className='font-semibold'></span></p>
                    <p><span className='font-semibold'></span></p>
                </div>
            </div>
            {/* User Reviews */}
            <div>
                <h2 className='text-xl font-semibold'>Reviews:</h2>
            </div>
        </section>
    );
};

export default Profile;