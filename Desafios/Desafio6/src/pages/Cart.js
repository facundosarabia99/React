import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const {cart, deleteCart, removeProduct, getTotalCart, getPrecioTotalCart} = useContext(CartContext)

    return (
    <div>
        {cart.length === 0 ? (
             <div>
             <h2>Cart Empty</h2>
             <Link to="/">Home</Link>
             </div>
        ) : (
             <div>
                {Cart.map((item) => (
                    <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>Precio: ${item.price}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <button onClick={()=> removeProduct(item.id)}>Remove Producto</button>
                    </div>
                ))}
                <button onClick={deleteCart}>Delete Cart</button>
                <div>
                     <p>Cantidad de Items({getTotalCart()})</p>
                     <p>Precio Total (${getPrecioTotalCart()})</p>    
                </div>
              </div>
        )}

    </div>
     );
};
    export default Cart;