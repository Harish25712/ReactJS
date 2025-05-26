import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = <h1 className="head" tabIndex="1">Hello from JSX</h1>; // JSX

// React Functional Component using arrow functions
const HeadingComponent = () => {
 return <h1 className="heading">JSX from react functional component</h1>;
};

/* can also be written like this, if we write JSX in multiple lines enclose it with ();

  const HeadingElement = () => (
    <div id="container">
 <h1 className="heading">JSX from react functional compo</h1>; 
</div>);
*/


/* React Functional Component using normal functions:
 const HeadingElement = function() { 
    return (
    <div id="container">
 <h1 className="heading">JSX from react functional normal component</h1>; 
</div>
);
}; 
*/

// component composition
const Title = () => (
    <div> 
    <HeadingComponent/> 
    <h2>hello from title component</h2>
    </div>
);

/* writing JS inside JSX by enclosing with {}
   calling a react element inside a react component 
const num =13;
const Jsjsx = () => (
    <div> 
        {jsxHeading} 
    <HeadingComponent/> 
    <h2>hello from jsjsx component</h2>
    </div>
); 
*/

/* calling a react element inside a react element: 

const elem=<spam>whatt</spam>;
const jsxHeading = (<h1 className="head" tabIndex="1">{elem}Hello from JSX</h1>); 
*/


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title/>);

 // can also be rendered as <HeadingComponent></HeadingComponent> (or)  {HeadingComponent()}

 