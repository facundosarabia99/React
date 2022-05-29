import {products} from "../../data/products"
import ItemDetail from "../ItemDetail/ItemDetail"
import React from "react"
import { useParams } from "react-router-dom"

export default function ItemDetailtContainer(){

    const { id } = useParams()
    
    const[item, setItem] = React.useState([])
    
    const getItem = new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(products);
        },1)
    }).then(() => {
        console.log("getItem")
        const product = products.find(product => product.id == id);
        setItem(product);
    }) 


    return (
        <>           
            <ItemDetail item = {item} />
        </>   

    )

}
