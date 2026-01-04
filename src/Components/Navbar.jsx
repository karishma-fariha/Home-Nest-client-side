import React, { use } from 'react';
import ThemeToggle from './ThemeToggle';
import { Link, NavLink } from 'react-router';
import { ImHome } from 'react-icons/im';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import Logo from './Logo';

const Navbar = () => {
    const { user, logout } = use(AuthContext);
    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/allProperties'>Property Listing</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to="/ourStory">Our Story</NavLink>
    </>


    // log out
    const handleLogout = () => {
        // console.log('logout')
        logout().then(() => {
            toast('You Logout Successfully..');
        }).catch((error) => {
            alert(error)
            toast(error);
            // An error happened.
        });;
    }
    return (
        <div className="navbar bg-base-200 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="flex items-center justify-center gap-1">
                    <Logo></Logo>
                </div>
            </div>
            <div className="hidden navbar-center lg:flex gap-5">
                {
                    links
                }
            </div>
            <div className="navbar-end gap-5">
                {user ?
                    (<div className="dropdown dropdown-end">
                        <div tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar">
                            <div className="md:w-10 w-7 rounded-full">
                                {/* src={`${user? user.photoURL : userImg}`} */}
                                <img 
                                className='w-12 h-12 rounded-full' 
                                src={`${user?.photoURL }`} alt="User" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[50px] w-52 p-2 shadow-sm mt-3 border border-gray-100 text-secondary font-bold">
                            <li><button onClick={handleLogout} className=''>LogOut</button></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                        </ul>
                    </div>)


                    :
                    (<div className="md:flex md:gap-4">
                        <Link to="/login"
                            className='btn btn-primary md:px-14'>
                            Login</Link>

                        <Link to="/register"
                            className='btn border-2 border-primary md:px-14'>
                            Registration</Link>
                    </div>)


                }
                <ThemeToggle></ThemeToggle>
            </div>
        </div>
    );
};

export default Navbar;