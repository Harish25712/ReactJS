create a source folder -> src 
place every components inside a component folder -> not mandatory
Never keep hard coded data in components, place it inside a folder -> utils/common/config -> constants.js file

export and import components

default export syntax -> export default componentname;
default import syntax -> import componentname from path

default import/export vs named import/export

a file cannot have more than one default exports

to export multiple things from a same file u should use -> named exports

named export syntax -> export const componentname;
named import syntax -> import {componentname} from path

React Hooks: A normal JS utility functions
             keeps the UI layer in sync with data layer

useState() -> superpowerful state variables -> maintains state of the component -> scope is inside that component

UseEffect()

whenever a state variable updates, react re renders the component (by finding out the differnce between virtual dom's and update the dom)

React Algorithm:

Reconcillation Algorithm (or) React fiber (React 16) -> new way of finding the div and updating the dom

actual dom -> <div>
                  <div>
                     <img>

Virtual DOM -> object representation of actual dom

Diff Algorithm -> finds out the difference between updated(new) virtual dom and previous(old) virtual dom and then it updates the actual dom/UI 

incremental rendering -> 

React is fast -> efficient dom manipulation through virtual dom, diff algorithm