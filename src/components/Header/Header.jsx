import React, { useContext } from 'react';
import logo from '../../assets/images/logo/toys-land-logo.png';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const {user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
        .then(() => {})
        .catch(error => {
            console.error(error.message);
        })
    }
    return (
        <div className='flex items-center justify-between mt-6'>
            <Link className='flex items-center justify-center gap-4' to='/'>
                <img className='w-[80px] h-[80px]' src={logo} />
                <h2 className='text-[#2c3e50] font-bold text-3xl'>Toys Land</h2>
            </Link>
            <ul className='flex items-center justify-center'>
                <li className='mr-7 text-[#2c3e50]'>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className='mr-7 text-[#2c3e50] font-semibold'>
                    <NavLink to='/all-toys'>All Toys</NavLink>
                </li>
                <li className='mr-7 text-[#2c3e50] font-semibold'>
                    <NavLink to='/my-toys'>My Toys</NavLink>
                </li>
                <li className='mr-7 text-[#2c3e50] font-semibold'>
                    <NavLink to='/add-toy'>Add A Toy</NavLink>
                </li>
                <li className='mr-7 text-[#2c3e50] font-semibold'>
                    <NavLink to='/blogs'>Blogs</NavLink>
                </li>
            </ul>
            <div className='flex items-center justify-center'>
                {
                    user ? <>
                        <span title={user?.displayName} className=''><img className='w-[80px] h-[80px] rounded-full' src={user?.photoURL} /></span>
                        <button onClick={handleLogout} className='px-6 py-2 bg-[#f39c12] ml-4 text-white font-semibold rounded'>Logout</button>
                    </> : <Link to='/login'>
                    <button className='px-6 py-2 bg-[#f39c12] ml-4 text-white font-semibold rounded'>Login</button>
                </Link>
                }
                
            </div>
        </div>
    );
};

export default Header;