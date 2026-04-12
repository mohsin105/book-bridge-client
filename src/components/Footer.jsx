import React from 'react';
import { FaPhoneVolume, FaRegCopyright } from 'react-icons/fa';
import { Link } from 'react-router';
import useFetchCategories from '../hooks/useFetchCategories';
import { CiMail } from 'react-icons/ci';
import logo from '../assets/bookbridge_logo.png'

const Footer = () => {
    const categories = useFetchCategories();
    // if(categories && categories.length>5){
    //     const shortCategories = categories.slice(5);
    // }
    // else if(categories){
    //     const shortCategories = categories;
    // }
    return (
        <div className=' bg-slate-600 text-gray-100 p-4 '>
            <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-8 border-b  pb-4'>

                <div className='space-y-2'>
                    <div className='flex items-center space-x-4 text-lg font-bold my-2'>
                        <div className='size-6'>
                            <img 
                                src={logo} 
                                alt=""
                                className='' />
                        </div>
                        <h6>BookBridge</h6>
                    </div>
                    <div>A Peer-to-Peer Book Sharing Platform</div>
                    {/* <div>3</div>
                    <div>4</div> */}
                </div>
                <div className='space-y-2'>
                    <div className='text-base font-bold my-1'>Quick Links</div>
                    <ul>
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
                        <li>
                            User Policy
                        </li>
                    </ul>
                </div>
                <div className='space-y-2'>
                    <div>Categories</div>
                    {categories && (
                        <div>
                            {categories.length>5? (
                                <div>
                                    {categories.slice(0,5).map(category=>(
                                        <p key={category.id}>
                                            {category.name}
                                        </p>
                                    ))}
                                </div>
                            ) :(
                                <div>
                                    {categories.map(cat=>(
                                        <p key={cat.id}>
                                            {cat.name}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className='space-y-2'>
                    <div className='text-lg font-semibold'>Contact</div>
                    <div className='flex space-x-2 items-center'>
                        <CiMail />
                        <p>mohsinibnaftab@gmail.com</p>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <FaPhoneVolume />
                        <p>+8801742778496</p>
                    </div>
                    <div>Bangladesh</div>
                </div>
            </div>
            <div className='mt-2  flex justify-center items-center'>
                <div>
                    <FaRegCopyright />
                </div>
                <p>2026 BookBridge All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;