import React, { useEffect, useState } from "react"
import {getProducts} from "../../api/api";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom"




function ItemListContainer({greeting}) {

    const[products, setProducts] = React.useState([]);
    const{categoryTitle} = useParams;

    useEffect(() => {
        getProducts().then((products) => {
            if (!categoryTitle){
                setProducts(products);
            } else {
                const productsByCategory = products.filter((product) => {
                    return product.category === categoryTitle;
                });
            
            setProducts(productsByCategory);
            }

            }).catch((error)=> {
                console.log(error);
            });
            },[categoryTitle]);

    return (
        <div>
            <h1>{greeting}</h1>
            {products.length > 0 ? <ItemList products={products}/> : <p>Loading Products </p>}
        </div>
    )
};

export default ItemListContainer;

