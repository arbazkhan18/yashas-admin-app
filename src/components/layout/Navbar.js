import React from 'react';
import { Link } from 'react-router-dom';
import SingedInLinks from './SingedInLinks';
import SingedOutlinks from './SignedOutLinks'

const Navbar = ()=>{
    return (
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to='/signin' className="brand-logo">Yashas App</Link>
                    <SingedInLinks />
                    <SingedOutlinks/>
                </div>
            </nav>
    );
}

export default Navbar;