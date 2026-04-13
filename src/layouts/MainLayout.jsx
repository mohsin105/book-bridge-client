import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import useAuthContext from '../hooks/useAuthContext';

const MainLayout = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const {user} = useAuthContext();
    return (
        <section>
            <div className='grid grid-cols-12'>
                {/* Desktop SideBar */}
                {user && (
                    <div className='col-span-2 hidden md:block  bg-cyan-50  h-screen sticky top-0 left-0' >
                        <Sidebar/>
                    </div>
                )}
                {/* Mobile SideBar - Always Hidden. Controlled by state*/}
                {isSideBarOpen && (
                    <div className='col-span-2 fixed md:hidden top-0 z-50 bg-gray-100 h-screen w-48 ' >
                        <Sidebar/>
                    </div>
                )}
                <div className={`${user? 'col-span-12 md:col-span-10' :'col-span-12'}`}>
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

export default MainLayout;