import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>

            <ToastContainer />
            
        </div>
    );
};

export default AuthLayout;