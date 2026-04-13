import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';

const DashboardLayOut = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    return (
        <section>
            <div className='grid grid-cols-12'>
                {/* Desktop SideBar hidden on small screen. */}
                <div className='col-span-2 hidden md:block  bg-cyan-50  h-screen sticky top-0 left-0' >
                    <Sidebar/>
                </div>
                {/* Mobile SideBar */}
                {isSideBarOpen && (
                    <div className='col-span-2 fixed md:hidden top-0 left-0 z-50 bg-gray-100 h-screen ' >
                        <Sidebar/>
                    </div>
                )}
                <div className='md:col-span-10 col-span-12'>
                    <div className='sticky top-0 z-40'>
                        <Navbar 
                            isSideBarOpen={isSideBarOpen} 
                            setIsSideBarOpen={setIsSideBarOpen}/>
                    </div>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </section>
    );
};

export default DashboardLayOut;