import React from 'react';
import { NavLink } from 'react-router-dom';

const SingedInLinks = () =>{
    return (
        <ul className="right">
            <li> <NavLink to='/create'>  New Customer </NavLink> </li>
            <li> <NavLink to='/'> Log Out </NavLink> </li>
            <li> <NavLink to='/' className='btn btn-floating pink lightne-1'> YS </NavLink></li>
        </ul>
    )
}

export default SingedInLinks;
