import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";


const AppLayout = () =>{
  // console.log(<Body/>) -> Virtual DOM;
  return(
    <div className="App">
      <Header/>
      <Body/>  
       {/* component composition */}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);