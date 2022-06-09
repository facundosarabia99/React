import { NavLink } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import Carticon from '../CartIcon/CartIcon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

export default function Navbar(){
    const {cart, getTotalCart} = useContext(CartContext);
    return(
        <header className="header">
            <Carticon count={2} />
            <div className="logo">
                <NavLink to="/"> <img alt="logo" src={logoImg}/></NavLink>
            </div>
            {/* <ul className="links" style = {linkstyle}> */}
            <ul>
                <li><NavLink to={`/`} > Inicio </NavLink></li>
                <li><NavLink to={`/category/vehiculos`} > Vehiculos </NavLink></li>
                <li><NavLink to={`/category/electricos`} > Electricos </NavLink></li>
                <li><NavLink to={`/category/libros`} > Libros </NavLink></li>
            </ul>
            { cart.length >= 0 &&
                    <button to="/cart"> 
                    <span><FontAwesomeIcon icon={faShoppingCart} /></span>
                    <span>{getTotalCart()}</span>
                   </button>  
                }    
        
        </header>
    );
}