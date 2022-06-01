import { createContext, useState } from "react";
export const CartContext = createContext ([]);


const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState ([]);
    const addToCart = (cantidad, producto) => {
        if (enCart(producto.id)) {
            alert('Ya esta en el cart!');
        } else {
        setCart ([ ...cart, {...producto, cantidad}])
        }
    };
    const enCart = (id) => {
        const respuesta = cart.some((producto)=> producto.id === id);
        return respuesta;
    };
    const removeProduct = (id) =>{
        setCart(cart.filter(producto => producto.id != id))
    }
    const deleteCart = () => {
        setCart([]);
    };
    
    const getTotalCart = () =>{
        let cantidadCart = 0;
        for(let i = 0; i < cart.length; i++){
            cantidadCart += cart[i].cantidad
        };
        return cantidadCart;
    }
    
    const getPrecioTotalCart = () =>{
        let precioTotal = 0;
        for(let i = 0; i < cart.length; i++){
            precioTotal += (cart[i].precio * cart[i].cantidad)
        }
        return precioTotal;
    }
    
    console.log(cart)
        return(
            <CartContext.Provider value={{ cart, addToCart, deleteCart, removeProduct, getTotalCart, getPrecioTotalCart}}>
                {children}
            </CartContext.Provider>
        )
    }
    export default CartContextProvider