import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const Header = () =>{
  const[togglevalue,settogglevalue]=useState("login");
  return(
    <div className="head">
      <div className="img">
        <img className="img-src" src={CDN_URL}></img>
      </div>
      <div className="nav-items">
       <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button className="log-btn" onClick={()=>{
           togglevalue=="login"?settogglevalue("logout"):settogglevalue("login")
        }}>{togglevalue}</button>
       </ul>
      </div>
    </div>
  )
}

export default Header;