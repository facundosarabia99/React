// import {products} from "../../data/products"
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import {getProducts} from '../../api/api';
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase"

export default function ItemDetailContainer(){
    const [product, setProduct] = useState([]);
    const { id } = useParams()
    
    useEffect(() => {
            // const db = getFirestore()
        // Traer Producto
        console.log(id)
        const itemRef = doc(db, "productos",id)
        getDoc(itemRef)
        .then(snapshot => {
            console.log(snapshot.data())
            if(snapshot.exists()){
           setProduct({id: snapshot.id, ...snapshot.data()})
            }
        })
        .catch(error => {
            console.log(error)
        })
    }, [id]);
    
    // const getItem = new Promise((resolve,reject) =>{
    //     setTimeout(() =>{
    //         resolve(products);
    //     },1)
    // }).then(() => {
    //     console.log("getItem")
    //     const product = products.find(product => product.id == id);
    //     setItem(product);
    // }) 


    return (
        <>           
            {!product? <p>Loading products</p> : <ItemDetail product = {product} />}
        </>   

    )

};
