import React from 'react';
import { ButtonLink } from './../Buttons/ButtonLink';
import './Footer.scss';
export const Footer = () => {
    return (
        <footer className="border-top footer text-muted">
            <div className="container">
                &copy; 2021 - KameleoonApp -{' '}
                <ButtonLink hrefTo="/Privacy" text={'Privacy'} reverse={true} />
            </div>
        </footer>
    );
};
//export default Footer;
