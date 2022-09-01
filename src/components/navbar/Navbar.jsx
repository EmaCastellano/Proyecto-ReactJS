import React from 'react';
import './navbar.scss'
import { Icon } from '@iconify/react';
import Carrito from '../CartWidget/CartWidget';


const Navbar = () => {
    return (
        <div className="navbar">
            <Icon icon="ic:round-signal-wifi-connected-no-internet-4" color="white" width="100" height="100" />
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