import React from 'react';
import { Link } from 'react-router';

const Navbar = ({isSideBarOpen, setIsSideBarOpen}) => {
    return (
        <div className='bg-slate-500 h-12 flex justify-between font-semibold'>
            <div className='font-bold text-xl'>BookBridge</div>
            <div className='hidden md:block'>

                <div className='flex justify-around gap-4 text-lg '>
                    {/* <Link></Link> */}
                    <div>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </div>
                    <div>
                        <Link to={'books'}>
                            Books
                        </Link>
                    </div>
                    <div>Contact</div>
                    <div>About</div>
                </div>
            </div>
            <div className=' text-shadow-white  space-x-2 hidden md:block'>
                <Link to={'sign-up'} className=''>
                    <button className='rounded-md bg-blue-600 hover:bg-blue-700 p-2'>
                        Sign-Up
                    </button>
                </Link>
                <Link to={'login'} >
                    <button className='rounded-md bg-emerald-600 hover:bg-emerald-700 p-2'>
                        Sign In
                    </button>
                </Link>
            </div>
            <div className='block md:hidden' onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                <div className='flex flex-col space-y-1'>
                    <div className='w-4 h-1 bg-cyan-700 rounded-lg'></div>
                    <div className='w-4 h-1 bg-cyan-700 rounded-lg'></div>
                    <div className='w-4 h-1 bg-cyan-700 rounded-lg'></div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;