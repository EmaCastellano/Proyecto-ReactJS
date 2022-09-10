import React from 'react';
import './Navbar.scss'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
    return (
    
        <div className="navbar">
            
            
            <Icon className="navbar__icon" icon="icon-park:game" width="100" height="100" />
            <h1 className="navbar__title">Gamer's House</h1>
            <Link to='*' className="header-navlink">Inicio</Link>
            <Link to='/productos/RAM' className="header-navlink">Memorias Ram</Link>
            <Link to='/productos/Discos' className="header-navlink">Discos</Link>
            <Link to='/productos/Perifericos' className="header-navlink">Periféricos</Link>
            <CartWidget/>
            
        </div>
    )
}

export default Navbar