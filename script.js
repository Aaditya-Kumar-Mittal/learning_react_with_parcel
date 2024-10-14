import { user } from "./data.js";
import React from "react";
import { createRoot } from "react-dom/client";
import './style.css';


if (module.hot) {
  module.hot.accept();
}

// const h1 = <h1>My React Element</h1>
function Card(key, productName, productImage) {
  return <div className="card inter-family" key={key}>
    {/* <img src="https://www.apple.com/in/iphone-16-pro/images/overview/product-viewer/iphone-pro/all_colors__fdpduog7urm2_xlarge.jpg"></img> */}
    <img src={productImage}></img>
    <h2>{productName}</h2>
    <h2>Ratings: ⭐⭐⭐⭐⭐</h2>
    <h3>Price - $1500</h3>
  </div >
}

// const container = []

// for (let index = 0; index < 21; index++) {
//   container.push(Card(index));
// }

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {

    console.log(data)
    const container2 = data.products.map((product) => {
      // console.log(products);
      return Card(product.id, product.title, product.images[0]);
    });

    const containerDiv = <div className="container">{container2}</div>

    const root = createRoot(document.getElementById('root'))
    root.render(containerDiv)
  });

// console.log(React);
// console.log(user.name);
// console.log("Hello World!!!!!!!!!!!");
//create our react element


