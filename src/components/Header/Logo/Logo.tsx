import React from 'react';
import logo from '../../../assets/img/logo_kam.svg';
const Logo = () => {
    return (
        <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo Kameleoon" />
        </a>
    );
};

export default Logo;
