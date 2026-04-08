import React from 'react';
import useAuthContext from '../hooks/useAuthContext';

const Profile = () => {
    const {user} = useAuthContext();
    return (
        <section className='w-11/12 mx-auto'>
            <h1 className='text-4xl font-semibold text-center'>Profile Page</h1>
            {/* Profile Section */}
            {user && (
                <div className='grid grid-cols-2 gap-8 p-4 rounded-md bg-gray-50 border-gray-400'>
                    {/* Profile Image Section */}
                    <div className=''>

                    </div>
                    <div className='space-y-4'>
                        <h3 className='text-xl font-semibold'>
                            {user.first_name} {user.last_name}
                        </h3>
                        <p><span className='font-semibold'>Phone number: </span>{user.phone_number}</p>
                        <p><span className='font-semibold'>Address: </span>{user.address}</p>
                        <p><span className='font-semibold'>Overdue History: </span></p>
                        <p><span className='font-semibold'></span></p>
                        <p><span className='font-semibold'></span></p>
                        <div className='flex justify-end'>
                            <div className='space-x-4'>
                                <button className='p-2 rounded-md bg-amber-300 hover:bg-violet-400'>
                                    Update Profile
                                </button>
                                <button className='p-2 rounded-md bg-rose-300 hover:bg-rose-500'>
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* User Reviews */}
            <div>
                <h2 className='text-xl font-semibold'>Reviews:</h2>
            </div>
        </section>
    );
};

export default Profile;