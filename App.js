/*
Emmet -> html:5

React JS -> JS library for building user interface, works with existing apps,
 used to build large scale applications

Hello world using html:
<div id="root">
<h1>H1 using html</h1>
</div>

Hello world using JS:
<div id="root"> </div>
<script>
const heading = document.createElement("h1");
heading.innerHTML="H1 using JS";
const root=document.getElementById("root");
root.appendChild(heading);
</script>

CDN links -> content delivery network -> place where react library is hosted

1) React.JS files -> contains core of react code
2) ReactDOM.JS files -> used for DOM operations (most expensive)

<div id="parent">
    <div id="child1">
        <h1>h1 tag</h1>
        <h2>h2 tag</h2>
    </div>
    <div id="child2">
        <h1>h1 tag</h1>
        <h2>h2 tag</h2>
    </div>
</div>

React.createelement - creates a JS object, takes three parameters
1) name of the tag
2) attributes to the tag
3) childrens(one children, pass it as a normal react element or 
 pass it is an array in case of siblings)

for nested html structure -> pass the reactelement (child) as the 3rd parameter
for siblings -> pass the 3rd arhument as array of childrens

render function - takes the JS obj, create a h1/div tag which the browser understands 
and puts them inside the root element

props - children + attributes

order of files is important (app.js should be below CDN links)

root.render -> replaces the tags which we pass by bypassing/replacing whatever is
 already present in the root

 cross-origin

 can script tag  be written inside head tag

 library(React) vs framework(Angular)

JSX
*/

const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},"h1 tag"),React.createElement("h2",{},"h2 tag")]),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"h1 tag"),React.createElement("h2",{},"h2 tag")]
)]);
    console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);