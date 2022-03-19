import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <Link className='menu' to="/shop">Shop</Link>
                <Link className='menu' to="/review">Order Review</Link>
                <Link className='menu' to="/inventory">Manage Inventory</Link>
            </nav>
        </div>
    );
};

export default Header;