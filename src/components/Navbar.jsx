import React from 'react';
import { Link, useNavigate } from 'react-router';
import useAuthContext from '../hooks/useAuthContext';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import logo from '../assets/bookbridge_logo.png'

const Navbar = ({isSideBarOpen, setIsSideBarOpen}) => {
    const {user,logOutUser}= useAuthContext();
    const navigate = useNavigate();
    const signOutUser = ()=>{
        try {
            logOutUser();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='bg-gradient-to-b  from-violet-900/80 to-violet-950/80 h-12  font-semibold p-2'>
            <div className='w-11/12 mx-auto flex justify-between '>
                <div className='flex space-x-4 justify-center items-start font-bold text-xl text-gray-200'>
                    <div className='size-8'>
                        <img 
                            src={logo}
                            alt="logo"
                            className='' />
                    </div>
                    <h4>BookBridge</h4>
                </div>
                <div className='hidden md:block text-gray-200'>

                    <div className='flex justify-around gap-4 text-lg '>
                        {/* <Link></Link> */}
                        <div>
                            <Link to={'/'}>
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link to={'/books'}>
                                Books
                            </Link>
                        </div>
                        <div>Contact</div>
                        <div>About</div>
                    </div>
                </div>
                <div className='pb-2'>
                    {user? (
                        <div className=''>
                            <div className='flex gap-4'>
                                <div className='size-8 rounded-full bg-violet-600 hover:bg-violet-300 flex justify-center items-center'>
                                    <div>
                                        <MdOutlineNotificationsActive className='text-xl' />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        onClick={()=>signOutUser()}
                                        className='p-1 px-2 rounded-md bg-gray-400 hidden md:block'>
                                        LogOut
                                    </button>
                                </div>
                            </div>
                        </div>
                    ):(
                        <div className=' text-gray-100  space-x-2 hidden md:block'>
                            <Link to={'/sign-up'} className=''>
                                <button className='rounded-md bg-blue-600 hover:bg-blue-700 p-1 '>
                                    Sign-Up
                                </button>
                            </Link>
                            <Link to={'/login'} >
                                <button className='rounded-md bg-emerald-600 hover:bg-emerald-700 p-1'>
                                    Sign In
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
                <div className='block md:hidden' onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                    <div className='flex flex-col space-y-1'>
                        <div className='w-4 h-1 bg-cyan-700 rounded-lg'></div>
                        <div className='w-4 h-1 bg-cyan-700 rounded-lg'></div>
                        <div className='w-4 h-1 bg-cyan-700 rounded-lg'></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;