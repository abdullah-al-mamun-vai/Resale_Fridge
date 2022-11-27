import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const DashBoardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboardDrayer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  justify-start">
                    {/* <!-- Page content here --> */}

                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardDrayer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='font-semibold capitalize text-secondary'><Link to={'dashboard/my-order'}>my order</Link></li>
                        <li className='font-semibold capitalize text-secondary'><Link to={'dashboard/all-buyers'}>all buyers</Link></li>
                        <li className='font-semibold capitalize text-secondary'><Link to={'dashboard/all-sellers'}>all sellers</Link></li>
                    </ul>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DashBoardLayout;