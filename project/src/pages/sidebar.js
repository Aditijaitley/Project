
import { useState ,useEffect} from "react";

import axios from "axios";
import { Link, useParams } from "react-router-dom";



function Sidebar() {
    let uinfo = JSON.parse(localStorage.getItem("uinfo"))
  console.log(uinfo)
    return ( 


        <div className="sidebarcss"> 
      <div className="about wow fadeInUp" data-wow-delay="0.1s">
      <ul className="nav">
      {/* <li className="nav-item">
    <a className="nav-link active" href="/myaccount">
      My Account
    </a>
  </li> */}
  {/* <li className="nav-item">
    <a className="nav-link active" href="/edituser">
      Edit User
    </a>
  </li> */}

  <li className="nav-item">
    <a className="nav-link button" href="/review">
      Add Reviews
    </a>
  </li>
  <li className="nav-item" style={{marginLeft:30}}>
    <a className="nav-link button" href="/allbooking">
      My Bookings
    </a>
  </li>
  <li className="nav-item" style={{marginLeft:30}}>
    <a className="nav-link button" href="/myaccount">
      My Account
    </a>
  </li>
  {/* <li className="nav-item">
    <Link to="/logout" className="nav-link ">
      Logout
    </Link>
  </li> */}
</ul>

</div>
</div>
     );
}

export default Sidebar;