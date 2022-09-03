import React from 'react';
import './navbar.scss'
import { Icon } from '@iconify/react';

const Navbar = () => {
    return (
        <div className="navbar">
            <Icon className="navbar__icon" icon="icon-park:game" width="100" height="100" />
            <h1 className="navbar__title">La Casa del Gamer</h1>
            <a href='nosotros'>Nosotros</a>
            <a href='tienda'>Tienda</a>
            <a href='contacto'>Contacto</a>

        

        </div>
    )
}

export default Navbar