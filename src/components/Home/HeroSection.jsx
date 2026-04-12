import React from 'react';
import heroBg from '../../assets/hero_bg.jpg'
const HeroSection = () => {
    return (
        <div className='relative w-full h-[70vh]'>
            <section
                className='w-full h-full'
                style={{backgroundImage:`url(${heroBg})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                {/* Overlay Element */}
                <div className='absolute bg-gradient-to-r from-black/10 to-black/80 md:to-black/20 inset-0'></div>
                {/* Text/Content Element */}
                <div className='relative flex items-center h-full w-1/2 text-blue-50'>
                    {/* <div className='absolute from-black/60 to-black/60 inset-0'></div> */}
                    <div className='pl-4 md:pl-8  font-semibold'>
                        <h1 className='text-6xl  my-4 '>
                            BookBridge
                        </h1>
                        <h2 className='text-3xl  drop-shadow-blue-800'>
                            Borrow, lend, and discover books within your own community — no libraries, no limits.
                        </h2>
                        <div className='text-xl space-x-8 mt-4'>
                            <button className='p-4 rounded-md bg-amber-600 hover:bg-amber-700'>
                                Sign Up
                            </button>
                            <button className='p-4 rounded-md bg-emerald-600 hover:bg-emerald-700'>
                                Login
                            </button>
                        </div>
                    </div>
                </div>

            </section>
            
        </div>
    );
};

export default HeroSection;