# learning_react_with_parcel

## My Notes

1. **A Simple React Element and its properties**

   ```javascript
     {
       $$typeof: Symbol.for('react.element'),
       type: 'h1',
       ref: null,
       props: {
         children: 'Hello World!',
       },
     }
   ```

2. **That Element Using JSX**

   ```javascript
   const h1 = <h1>'Hello World'</h1>;
   ```

3. **React Component**

   - **_React Component is a react element whose type is a function which is returning a JSX._**
   - React Component is a function that returns some JSX.
   - Visually, it can be defined as a reusable piece of UI, that can be reused multiple times and anywhere.
   - We can pass an object to it, object properties to it in the form of `props`
   - We can pass `props` and destructure them or destructure them within the argument brackets itself.

4. **Rendering a React Component Using React.createElement()**

   ```javascript
   root.render(
     React.createElement(Card, {
       key: 1,
       title: "Apple",
       src: "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png",
     })
   );

   console.log(
     React.createElement(Card, {
       key: 1,
       title: "Apple",
       src: "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png",
     })
   );
   ```

5.
