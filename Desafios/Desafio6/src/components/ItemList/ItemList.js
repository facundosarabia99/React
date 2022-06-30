import { useEffect } from "react"
import Item from "../Item/Item"

export default function ItemList({products}){
    console.log(products)
    return(        
        <div>
            {products.map(function(product) {
                return(
                    <Item key={product.id} item = {product} />                
    
                        )                
                    })
                    }
        </div>
    )
}



