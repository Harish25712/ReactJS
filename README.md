 Props.
 Short form for properties. To dynamically send data to a 
component we use props. Passing a prop to a function is like 
passing an argument to a function

Config Driven UI.

 It is a user Interface that is built and configured using a 
declaration configuration file or data structure, rather than 
being hardcoded.
 Config is the data coming from the api which keeps on changing 
according to different factors like user, location, etc.


Unique Key id while using map

Each item in the list must be uniquely identified
 Why?
 When we have components at same level and if a new component 
comes on the first without ID, DOM is going to re-render all the 
components again. As DOM can’t identify where to place it. 
But if we give each of them a unique ID then react knows where 
to put that component according to the ID. It is a good 
optimization and performance thing. 

Note* Never use index as keys in map. It is not recommended.