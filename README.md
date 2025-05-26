instead of writing npx parcel index.html everytime.. inside package.json specify separet scripts for development and production environment:

"start": "parcel index.html", 
"build": "parcel build index.html",

npm run start or npm start -> development envi
npm run build ->production envi

dom elements and react elements 

JSX - Java Script syntax
    - its html/XML like syntax

JSX and React are different..its not part of react

JSX is not html inside JS

you write code first for humans and then for machines

JS engines understand ecmascript or es6

js engine does not understand JSX

javascript - any piece of code that JS engines understand

then how JSX line is executed?

parcel along with Babel -> transpiles the JSX code before it reaches the JS engine, so that JS engine can understand and execute it

Babel (JS compiler): JSX code transpiled to -> React.createelement -> ReactElement-JS object -> HTMLElement(on render)

Babel using tokenization and Abstract syntax tree algorithms for transpilation

JSX using cameelcase -> eg: className, tabIndex
HTML -> eg: class, tabindex

if u write JSX in multiple lines enclose it with paranthesis -> ();

React components: Everything in react is a component

Types:

1) Class based componenets (old): uses JS classes

2) Functional components (new): uses JS functions

React Functional Component - Normal JS function that returns a piece of JSX element (or) a function that returns a react element
                           - start it with capital letter

To render a functional component -> enclose it with angular brackets ->  <functionalcomponent/>       

component composition -> calling a component inside a component (composing 2 components into 1)

inside JSX, u can write any piece of JS expressions or code if u enclose it with a curly brackets {}

cannot access a component before initializing it

infinite loop -> call a react element inside react component and then calling the same react component inside the same react element

component inside component
component inside react element
react element inside react element
react element inside component  

All the 4 combinations are possible

You can call the components or react element n number of times

use h1 tag inside div

Cross-Site Scripting (XSS) - is a web security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. 

JSX escapes Cross-Site Scripting by sanitising the data before sending it

React is JS at the end of the day
React function components are normal JS fucntions at the end of the day
JSX is react.createElement at the end of the day
react.createElement is object at the end of the day

what makes react code readable / faster ? -> JSX