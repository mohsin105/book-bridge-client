import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/sidebar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    
    return (
        <section>
            <div className='grid grid-cols-12'>
                {/* Desktop SideBar */}
                <div className='col-span-2 hidden md:block  bg-cyan-50  h-screen sticky top-0 left-0' >
                    <Sidebar/>
                </div>
                {/* Mobile SideBar */}
                {isSideBarOpen && (
                    <div className='col-span-2 absolute ' >
                        <Sidebar/>
                    </div>
                )}
                <div className='md:col-span-10 col-span-12 '>
                    <Navbar 
                        isSideBarOpen={isSideBarOpen} 
                        setIsSideBarOpen={setIsSideBarOpen}/>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </section>
    );
};

export default MainLayout;