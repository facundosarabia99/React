import Alert from 'react-bootstrap/Alert'
import { toast } from "react-toastify";
import ItemCount from '../ItemCount/ItemCount'
import {products} from "../../data/products"
import ItemList from '../ItemList/ItemList';
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"


export default function ItemListContainer({greeting}){

debugger;
    const { id } = useParams()
    const[productsItems, getProducts] = React.useState([])

    useEffect( () => {
        const getProductsTask = new Promise((resolve,reject) =>{
            setTimeout(() =>{
                resolve(getProducts(products));
            },3000)
        })
        getProductsTask.then((products) =>{
            const product = products.find(product => product.id == id);
            getProducts(product);
        })
    })
    
    const addTocart = (count) =>{
        console.log(`add to cart ${count} items`);
        toast.success(`add to cart ${count} items!`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    return (
        <>           
            <Alert key='success' variant='success'>
                {greeting}
            </Alert>
            {/* <ItemCount stock='5' initial='1' onAdd={addTocart}/> */}
            <ItemList items = {productsItems} onAdd={addTocart}/>
        </>   
    )
}