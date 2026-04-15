import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default MainLayout;