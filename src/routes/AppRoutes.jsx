import React from 'react';
import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import BookList from '../pages/BookList';
import BookDetails from '../pages/BookDetails';
import AddBook from '../pages/AddBook';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route index element={<Home/>}></Route> */}
            <Route element={<MainLayout/>}>
                <Route path='/' element={<Home/>}></Route>
                <Route path='sign-up' element={<Registration/>}></Route>
                <Route path='login' element={<Login/>}></Route>
                <Route path='books' element={<BookList/>} ></Route>
                <Route path='book/:id' element={<BookDetails/>}></Route>
                <Route path='book/add' element={<AddBook/>} />
                <Route path='profile' element={<Profile/>}></Route>
                <Route path='dashboard' element={<Dashboard/>}></Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;