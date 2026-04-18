import React from 'react';
import { Link } from 'react-router';
import homeCTAbg from '../../assets/bookbridge_cta.png'
const CTA = () => {
    return (
        <div 
            className='space-y-4 text-2xl text-center font-semibold h-[70vh] text-gray-50 flex items-center justify-center rounded-sm'
            style={{background:`url(${homeCTAbg})`, backgroundSize:'cover', backgroundPosition:'center'}}>
            <div className='w-full sm:w-1/2 mx-auto rounded-md py-4 space-y-2'>
                <div>
                    <h3 className='w-full sm:w-2/3 mx-auto text-4xl sm:text-6xl text-center font-bold mb-8'>
                        Ready To Start Sharing Books?
                    </h3>
                    <p className='text-xl sm:text-2xl'>
                        Join thousands of readers exchanging books in your community. Borrow, lend and connect through books.
                    </p>
                    <div className='my-8 text-xl flex flex-wrap gap-4 justify-center'>
                        <div>
                            <Link to={'/books'} className='mx-4'>
                                <button className='p-2 px-4 rounded-md bg-cyan-600 hover:bg-cyan-800 cursor-pointer'>
                                    Browse Books
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link to={'/sign-up'} className='mx-4'>
                                <button className='p-2 px-4 rounded-md bg-violet-400 hover:bg-violet-600 cursor-pointer'>
                                    Sign Up Free
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link to={'/login'}>
                                <button className='p-2 px-4 rounded-md bg-slate-400 hover:bg-slate-600 cursor-pointer'>
                                    Login Here
                                </button>
                            </Link>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;