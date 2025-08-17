Monolith vs microservices Architecture :

microservices:

* separation of concerns

* follows single responsibility principle

Two approaches to fetching a API call in React:

1) Page loads -> make a API call -> Render (if api call takes 500ms, the page will wait/freeze for 500ms)

2) Page loads -> Render -> API call -> Re render (Preferred approach and gives a better UX)

React render cycles are very fast

Microservice Architecture:(new)
 - A microservice is a software architectural style that structures an application as a collection of small, independent, and loosely coupled services. 
 - Each service in a microservices architecture represents a specific functional module and operates as a separate unit with its own dedicated processes. 
 - These services communicate with each other through well-defined APIs (Application Programming Interfaces) typically over HTTP or other lightweight protocols.
 - It follows single responsibility principle
 - Separation of concerns -> All teams (Backend,UI,DB,SMS,Authentications,Email) work on their own independent services
 - On different ports we can deploy different service
 - At the end of the day, all these ports can be mapped to domain name
 - They interact by making a call to different ports/URLs
  - You can have different tech stacks for different things..(i.e)..You can write microservices in any architecture you want to
- eg: UI(react),backend(java),DB(python),SMS(golan)


Monolith Architecture:(old)
 - In software development, a monolith architecture refers to a traditional and older style of designing applications where the entire application is built as a single, large, and tightly integrated unit. 
 - In a monolithic architecture, all the different components and functionalities of the application are bundled together into a single codebase, typically running in a single process and sharing the same database.
 - All teams (Backend,UI,DB,SMS,Authentications,Email) work on a single repository/service
 - Single tech stack per application/project
 - eg: If java is used in a service then Java will be used for all services in a application/Project

Difference:
 - Monolith and microservice architectures is the level of coupling and the size of the building blocks. 
 - Monoliths are a single, tightly integrated unit, while microservices are a collection of small, independent services that communicate through well-defined interfaces.
 - Microservices provide advantages in terms of scalability, flexibility, and ease of maintenance, but they also come with increased complexity and operational challenges, which need to be carefully managed.

 How Web Apps / UI Applications fetch the data from Back-end ? - 2 Approaches:

 1. As soon as the Page loads -> make an API call -> wait for data to come (some milli seconds) -> render the UI
 2. As soon as the Page loads -> render the UI -> make an API call -> when it responds ->    re-render the UI with new data

 In React we will always use Approach 2, because it gives u a better UX as we can see something initially when the page loads because of the initial rendering rather than a blank screen for some milli seconds if we use Approach 1.

React has one of the best Rendering mechanism.

useEffect: It is a function that takes two arguments -> call back function and a dependency Array
This call back function is called after your component is rendered.

fetch will return a promise

How to resolve a promise?
 - Traditional approach - by using .then, catch and handling errors
 - New approach - async await

Our browsers block us to call API from one origin to different origin - CORS policy.
 To resolve this: Enable CORS chrome extension

Shimmer UI (preferred in industry)-> Fake cards are shown until the page loads.


