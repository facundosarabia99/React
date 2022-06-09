// import {products} from "../../data/products"
import ItemDetail from "../ItemDetail/ItemDetail"
import React from "react"
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDoc } from "firebase/firestore"

export default function ItemDetailtContainer(){

    const { id } = useParams()
    
    const[item, setItem] = React.useState([])
    React.useEffect(() => {
        const db = getFirestore()
        // Traer Producto
        const porductRef = doc(db, "products", id)
        getDoc(porductRef).then(snapshot => {
            if(snapshot.exists()){
           setItem({id: snapshot.id, ...snapshot.data()})
            }
        })
    }, [])
    
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
            <ItemDetail item = {item} />
        </>   

    )

}
