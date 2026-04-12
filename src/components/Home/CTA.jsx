import React from 'react';
import { Link } from 'react-router';

const CTA = () => {
    return (
        <div className='space-y-4 text-2xl text-center font-semibold'>
            <div className=' rounded-md py-4 space-y-2'>
                <div className='bg-gradient-to-r from-blue-200 to-indigo-300 py-2'>
                    Ready to Start Your Journey 
                    <Link to={'/sign-up'} className='mx-4'>
                        <button className='p-2 rounded-md bg-violet-400 hover:bg-violet-600 cursor-pointer'>
                            Sign Up
                        </button>
                    </Link>
                    Now!!!
                </div>
                <div className='bg-gradient-to-r from-cyan-200 to-teal-100 py-2'>
                    Already Have an Account!!! Welcome Back!!!
                    <Link to={'/login'}>
                        <button className='p-2 rounded-md bg-violet-400 hover:bg-violet-600 cursor-pointer'>
                            Login Here
                        </button>
                    </Link>
                </div>
            </div>
            <div className=' rounded-md py-4 bg-gradient-to-r from-cyan-200 to-teal-100 '>
                Want to Explore More....
                <Link to={'/books'} className='mx-4'>
                    <button className='p-2 rounded-md bg-violet-400 hover:bg-violet-600 cursor-pointer'>
                        Explore All Books
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CTA;