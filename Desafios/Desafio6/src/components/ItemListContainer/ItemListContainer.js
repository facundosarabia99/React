import Alert from 'react-bootstrap/Alert'
import { toast } from "react-toastify";
import ItemCount from '../ItemCount/ItemCount'
import {products} from "../../data/products"
import ItemList from '../ItemList/ItemList';
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container, Spinner, Row, Col } from 'react-bootstrap';
import { useState } from "react";
import { doc, getDoc, getDocs, collection, getFirestore, query, where} from "firebase/firestore";



export default function ItemListContainer({title, categoryId}){

    const[items, setItems] = React.useState([]);
    const[isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        const db = getFirestore()

        //traer coleccion con filtors
        if(categoryId){
            const q = query(collection(db, "products"), ref => ref.where("category_id", "==", categoryId))
            getDocs(porductsRef).then(snapshots => {
            if(snapshots.size === 0){
                console.log("No products")
            }
           setItems(snapshots.docs.map(doc => ({id: doc.id, ...doc.data()})))
            });
        } else {
            //Traer coleccion
        const porductsRef = collection(db, "products")
        getDocs(porductsRef).then(snapshots => {
            if(snapshots.size === 0){
                console.log("No products")
            }
           setItems(snapshots.docs.map(doc => ({id: doc.id, ...doc.data()})))
        });
        }

    },[categoryId])

    // useEffect( () => {
    //     if(categoryId){
    //         setTimeout(() =>{
    //             setIsLoading(false);
    //         }, 1000);
    //         setItems(products.filter(product => product.categoryId === +categoryId));
    //     }
    //     else{
    //         setTimeout(() =>{
    //             setIsLoading(false);
    //         }, 1000);
    //         setItems(products);
    //     }
    // }, [categoryId, isLoading]);
    
    return (
        <Container className={"itemlist-container"}>
            <Row>
                <Col>
                <h1>{title}</h1>
                </Col>
            </Row>
            <Row>
                {isLoading ? (
                    <Spinner animation="border" role="status" />
                ) : (
                    <ItemList items={items} />
                )}
            </Row>
        </Container>
    );
}