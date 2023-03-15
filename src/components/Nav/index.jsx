import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.css'

const Nav = () => {
    const checkClass = ({isActive}) => isActive ? s.active : ''
    return (
        <nav className={s.nav_bar}>
            <NavLink className={checkClass} to="/" > Home </NavLink>   
            <NavLink className={checkClass} to="/author" > Author </NavLink>   
            <NavLink className={checkClass} to="/companies" > Companies </NavLink>   
            <NavLink className={checkClass} to="/articles" > Articles </NavLink>   
        </nav>
    );
};

export default Nav;