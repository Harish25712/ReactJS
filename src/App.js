import React, { Children } from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestarantMenu from "./Components/RestarantMenu";

const AppLayout = () =>{
  // console.log(<Body/>) -> Virtual DOM;
  return(
    <div className="App">
      <Header/>
      <Outlet/>  
       {/* component composition */}
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
  path:"/",
  element:<AppLayout/>,
  children:[
  {
  path:"/",
  element:<Body/>,
  },
  {
  path:"/about",
  element:<About/>,
  },
  {
  path:"/contact",
  element:<Contact/>,
  },
  {
  path:"/restaurants/:resId",
  element:<RestarantMenu/>,
  },
  ],
  errorElement:<Error/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);