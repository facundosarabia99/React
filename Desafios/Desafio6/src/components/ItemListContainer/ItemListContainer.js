import Alert from 'react-bootstrap/Alert'
import { toast } from "react-toastify";
import ItemCount from '../ItemCount/ItemCount'
import {products} from "../../data/products"
import ItemList from '../ItemList/ItemList';
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore} from "firebase/firestore";
import { Container, Spinner, Row, Col } from 'react-bootstrap';
import { useState } from "react";


export default function ItemListContainer({title, categoryId}){

    const[items, setItems] = React.useState([]);
    const[isLoading, setIsLoading] = React.useState(0);

    useEffect( () => {
        if(categoryId){
            setTimeout(() =>{
                setIsLoading(false);
            }, 1000);
            setItems(products.filter(product => product.categoryId === +categoryId));
        }
        else{
            setTimeout(() =>{
                setIsLoading(false);
            }, 1000);
            setItems(products);
        }
    }, [categoryId, isLoading]);
    
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