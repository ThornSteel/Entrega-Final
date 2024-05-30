import React from 'react'
import {NavLink } from 'react-router-dom';
import "./styles/nav.css"
import { CartWidget } from './CartWidget';

export const Navbar = () => {
    return (
        <>
            <nav>
                    <img src="/Logo.jpg" alt="Logo de la pagina" />
                    <ul>
                        <li>
                            <NavLink className='LinkBar' to={"/"} activeclassname="active" >Nosotros</NavLink >
                        </li>
                        <li>
                            <NavLink className='LinkBar' to={"/productos"} activeclassname="active" >Productos</NavLink >
                        </li>
                        <li>
                            <CartWidget/>
                        </li>
                    </ul>
            </nav>
        </>
    )
}
