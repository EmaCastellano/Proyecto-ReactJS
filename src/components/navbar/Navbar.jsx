import React from 'react';
import './navbar.scss'
import { Icon } from '@iconify/react';
import Carrito from '../CartWidget';

const Navbar = () => {
    return (
        <div className="navbar">
            <Icon className="navbar__icon" icon="simple-icons:pcgamingwiki" />
            <h1 className="navbar__title">Servicios de Programación</h1>
            <a href="Nosotros">Nosotros</a>
            <a href="Servicios">Servicios</a>
            <a href="Programacion">Programación</a>
            <a href="Contacto">Contacto</a>
            <Carrito/>
        </div>
    )
}

export default Navbar