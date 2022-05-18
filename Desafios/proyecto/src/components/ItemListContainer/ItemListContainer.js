import React from "react"
import { products } from "./data/productos"
import AddButton from "../AddButton/AddButton";
import ItemList from "../ItemList/ItemList";
import {Container, Row, Col} from "react  -bootstrap"
export default function ItemListContainer ({title}) {
  return (
    <Container className="itemlist-container">
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <ItemList />
       
      </Row>
    </Container>

  
    
  );
}

function APP() {
  const task = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 3000)
  })

  task.then((result) => {
    console.log(result)
  }, err => {
    console.log(err)
  }).catch((err) => {
    console.log(err)
  })
}