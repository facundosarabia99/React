import { createContext, useState } from "react";
export const CartContext = createContext ([]);


const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState ([]);
    const addToCart = (quantity, product) => {
        if (enCart(product.id)) {
            alert('Already in cart!');
        } else {
        setCart ([ ...cart, {...product, quantity}])
        }
    };
    const enCart = (id) => {
        const respuesta = cart.some((product)=> product.id === id);
        return respuesta;
    };
    const removeProduct = (id) =>{
        setCart(cart.filter(product => product.id != id))
    }
    const deleteCart = () => {
        setCart([]);
    };
    
    const getTotalCart = () =>{
        let quantityCart = 0;
        for(let i = 0; i < cart.length; i++){
            quantityCart += cart[i].quantity
        };
        return quantityCart;
    }
    
    const getPrecioTotalCart = () =>{
        let precioTotal = 0;
        for(let i = 0; i < cart.length; i++){
            precioTotal += (cart[i].price * cart[i].quantity)
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