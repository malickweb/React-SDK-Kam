// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// JSON Menus
import './SubMenu.scss';
import menus from '../../../json/Menu-json.js';

export const SubMenu: Function = () => {
    const location = useLocation();
    const { pathname } = location;
    const [isCurrentPage, setIsCurrentPage] = useState<string>(pathname);

    if (pathname !== isCurrentPage) setIsCurrentPage(pathname);

    const handleClick = (e: any): void => {
        console.log('e', e);
    };

    console.log('isCurrentPage', isCurrentPage);
    return Object.keys(menus).map((value: string, i: number): any => {
        return (
            <li
                key={i}
                onClick={handleClick}
                className={
                    isCurrentPage === (menus as any)[value].anchorUrl
                        ? 'nav-item active'
                        : 'nav-item'
                }
            >
                <NavLink
                    exact
                    to={(menus as any)[value].anchorUrl}
                    activeClassName="actif"
                    className="nav-link text-dark"
                >
                    {(menus as any)[value].title}
                </NavLink>
            </li>
        );
    });
};

// export default SubMenu;
