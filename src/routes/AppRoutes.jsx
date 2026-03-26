import React from 'react';
import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';

const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route index element={<Home/>}></Route> */}
            <Route element={<MainLayout/>}>
                <Route path='/' element={<Home/>}></Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;