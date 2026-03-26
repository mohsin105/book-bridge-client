import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/sidebar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;