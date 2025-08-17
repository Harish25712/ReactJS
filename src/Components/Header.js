import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () =>{
  const[togglevalue,settogglevalue]=useState("login");
  return(
    <div className="head">
      <div className="img">
        <img className="img-src" src={CDN_URL}></img>
      </div>
      <div className="nav-items">
       <ul>
        <li><Link>Home</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link>Cart</Link></li>
        <button className="log-btn" onClick={()=>{
           togglevalue=="login"?settogglevalue("logout"):settogglevalue("login")
        }}>{togglevalue}</button>
       </ul>
      </div>
    </div>
  )
}

export default Header;