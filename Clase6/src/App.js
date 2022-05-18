import React from "react"
import { products } from "./data/productos"
function App() {
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


  console.log(products.map((product) => product.title));

  return (
    <div className="App">
      {products.map((product, index) => {
        return (
          <div key={index}>
      <p>{product.title}</p>
      </div>
      )
      })}
    </div>
  );
}

export default App;
