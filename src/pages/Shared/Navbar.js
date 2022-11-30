import React, { useContext } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UserContext } from '../Auth/AuthContext';

const Navbar = () => {

    const { user, handleOut } = useContext(UserContext);
    const ourMenu = <>
        <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/blog'}>blog</Link></li>
        <li><Link to={'/dashboard'}>Dashboard</Link></li>
        {
            user ?
                <>
                    <li><button onClick={handleOut}>Log Out</button></li>
                </> :
                <li><Link to={'/login'}>Login</Link></li>
        }
        {
            !user &&
            <li tabIndex={2}>
                <Link>
                    Register
                    <FaAngleDown></FaAngleDown>
                </Link>
                <ul className="p-2 bg-base-100 z-10">
                    <li><Link to={'/sign-up'}>Buyer Account</Link></li>
                    <li><Link to={'/seller-sign'}>Seller Account</Link></li>
                </ul>
            </li>
        }

        {/* {
            user ?
                <>
                    <li><button onClick={logOut}>Log out</button></li>
                    <li><Link to={'/dashboard'}>Dashboard</Link></li>
                </>
                : <li><Link to={'/login'}>Login</Link></li>
        } */}

    </>
    return (
        <div>
            <div className="navbar bg-primary ">
                <div className="navbar">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {ourMenu}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost uppercase text-xl text-secondary">Butterfly</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-secondary capitalize font-semibold">
                        {ourMenu}
                    </ul>
                </div>
                <label tabIndex={2} htmlFor="dashboardDrayer" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

        </div>
    );
};

export default Navbar;