import React from 'react';
import Logo from './../Logo/Logo';
import { SubMenu } from './SubMenu';

export const Menu = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div className="container">
                <Logo />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul className="navbar-nav flex-grow-1">
                        <SubMenu />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

//export default Menu;
