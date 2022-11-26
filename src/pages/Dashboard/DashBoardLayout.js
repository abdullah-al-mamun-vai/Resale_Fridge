import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const DashBoardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default DashBoardLayout;