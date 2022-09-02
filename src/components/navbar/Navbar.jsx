import React from 'react';
import './navbar.scss'
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (

        <Navbar className="bg-header">
            <div className="header-container">

            <Link to="/"><h1 className="header-title">La Casa de la Programacion</h1></Link>

                <nav className="header-navbar">
                <Link to='/Nosotros' className="header-navlink">Nosotros</Link>
                    <Link to='/Servicios' className="header-navlink">Servicios</Link>
                    <Link to='/Tienda' className="header-navlink">Tienda</Link>
                    <Link to='/Contacto' className="header-navlink">Contacto</Link>

                </nav>
            </div>
            </Navbar>
            )}