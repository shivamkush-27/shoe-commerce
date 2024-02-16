import React from 'react';
import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';

const Nav = () => {
    return (
        <header>
            <nav>
                <a href="/">
                    <img src="{headerLogo}" alt="Nike Logo" />
                    </a>     
            </nav>

        </header>
    )
}

export default Nav