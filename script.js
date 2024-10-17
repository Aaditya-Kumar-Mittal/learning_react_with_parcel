import { user } from "./data.js";
import React from "react";
import { createRoot } from "react-dom/client";
import './style.css';


if (module.hot) {
  module.hot.accept();
}

// const h1 = <h1>My React Element</h1>
function Card(props) {
  //Destructuring the object
  // const { key, title, src } = props;
  const { title, src, price } = props;

  // return <div className="card inter-family" key={key}>
  return <div className="card inter-family">
    {/* <img src="https://www.apple.com/in/iphone-16-pro/images/overview/product-viewer/iphone-pro/all_colors__fdpduog7urm2_xlarge.jpg"></img> */}
    <img src={src}></img>
    <h2>{title}</h2>
    <h2>Ratings: ⭐⭐⭐⭐⭐</h2>
    <h3>Price - ${price}</h3>
  </div >
}

//Creating a function for type 
function Card2() {
  return <h1>Hello World!</h1>
}

//Demonstrationg Use of Fetch API
/*
fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {

    console.log(data)
    const container2 = data.products.map((product) => {
      // console.log(products);
      return Card(

        { title: product.title, key: product.id, src: product.images[0] });
    });

    const containerDiv = <div className="container">{container2}</div>

    const root = createRoot(document.getElementById('root'))
    root.render(containerDiv)
  });
*/

//Demonstrationg Use of Fetch API using React Custom Component

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
    // Map over products and render each as a Card component
    const container2 = data.products.map((product) => (
      <Card key={product.id} price={product.price} title={product.title} src={product.images[0]} />
    ));

    // Wrap all cards in a container div
    const containerDiv = <div className="container">{container2}</div>;

    // Render the container div into the DOM
    const root = createRoot(document.getElementById('root'));
    root.render(containerDiv);
  })
  .catch((err) => console.error("Error fetching data:", err));




//const root = createRoot(document.getElementById('root'))

//root.render() method takes a react element
//Rendering a React Element of String Type
/*
root.render(
  //Reacts Mandotory Properties
  {
    $$typeof: Symbol.for('react.element'),
    type: 'h1',
    ref: null,
    props: {
      children: 'Hello World!',
    },
  }
);
*/

//Rendering a React Element whose Type is a Function --> a Component basically
/*
root.render({
  $$typeof: Symbol.for('react.element'),
  //setting the type to Card2 we passed the complete Card2 function to the render method
  type: Card,
  ref: null,
  props: {
    key: 1,
    title: 'Apple',
    src: 'https://cdn.dummyjson.com/products/images/groceries/Apple/1.png',
  },
})
  */


//Rendering a React Component Using React.createElement()
/*
root.render(React.createElement(Card, {
  key: 1,
  title: 'Apple',
  src: 'https://cdn.dummyjson.com/products/images/groceries/Apple/1.png',
}))

console.log(React.createElement(Card, {
  key: 1,
  title: 'Apple',
  src: 'https://cdn.dummyjson.com/products/images/groceries/Apple/1.png',
}));
*/

//Render a React Component --> This is a Custom Component
// root.render(<Card title='Apple'
//   src='https://cdn.dummyjson.com/products/images/groceries/Apple/1.png' />)

// console.log(React);