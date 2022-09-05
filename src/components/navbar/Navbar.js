import React from 'react';
import './navbar.scss'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <Icon className="navbar__icon" icon="icon-park:game" width="100" height="100" />
            
            <h1 className="navbar__title">La Casa del Gamer</h1>
            <Link to='/productos/Memoriasram' className="header-navlink">Memorias Ram</Link>
            <Link to='/productos/discos' className="header-navlink">Discos</Link>
            <Link to='/productos/perifericos' className="header-navlink">Periféricos</Link>
        </div>
    )
}

export default Navbar