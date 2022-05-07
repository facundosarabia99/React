import React from "react"
import { products } from "./data/productos"
import Item from "../Item/Item";



function ItemList() {

return (
    <div className="App">
      {products.map((product, index) => (
          <Item product = {product} key={product.id}/>
        )
    )}
    </div>
  );

}