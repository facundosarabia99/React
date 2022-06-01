import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

    const {cart, getTotalCart} = useContext(CartContext);

    return (

            <div className="cartWidget">
                { cart.length > 0 &&

                    <Link to='/cart'>
                        <span className="material-icons-outlined icon-cart">Cart</span>
                        <span>{getTotalCart()}</span>
                    </Link>

                }
            </div>

    )
}; 