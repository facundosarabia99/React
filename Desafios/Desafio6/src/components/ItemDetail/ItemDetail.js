import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export default function Item({product}){
	const [itemCount, setItemCount] = useState (undefined);
	const {addToCart, cart} = useContext(CartContext)

			
	const onAdd = (quantityToAdd) => {
		// Hemos recibido un evento del ItemCount
		setItemCount(quantityToAdd);
		addToCart(quantityToAdd, product)
	}

    return(
        <div>
			<div>
				<p className="id">{product.id}</p>
				<p className="title">{product.title}</p>
				<p className="stock">{product.stock}</p>
				<span className="price">{product.price}</span>
				<img src={product.image} alt="Product image"/>
			</div>
			<div>
				{
					!itemCount ?
					<ItemCount stock={product.stock} initial={1} onAdd={onAdd}/> :
					<Link to="/cart">Finish Purchase</Link>
				}
			</div>
		</div>
    )
}
