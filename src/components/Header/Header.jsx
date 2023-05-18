import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>
                <img src="" alt="" />
                <h2>Toys Land</h2>
            </div>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;