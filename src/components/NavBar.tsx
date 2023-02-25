import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const NavBar: React.FC = () => {


    return (
        <div className='flex justify-content-between w-full align-items-center px-3'>
            <h2 className='heading'>
                <NavLink className="navbar-brand" to="/">
                    Home
                </NavLink>
            </h2>
        </div>
    );
}

export default NavBar;
