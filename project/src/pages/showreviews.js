import Nav from "../nav";
import axios from "axios";
import { useState , useEffect } from "react";
function Showreview() {
  const[img, setimg]=useState([]);

  useEffect(()=>
  {
    axios.get("http://localhost:5050/getreview").then((response)=>
    {
      setimg(response.data)
    });
  },[]);
    return ( 
        <>
<Nav/>
<br/><br/><br/><br/><br/>
<h1 style={{marginLeft:500}}> User Reviews</h1>
  <div className="container">
    {img.map((ty)=>
  <figure className="snip1390">
    {/* <img
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg"
      alt="profile-sample3"
      className="profile"
    /> */}
    <figcaption>
      <h2>{ty.name}</h2>
      {/* <h4>{ty.email}</h4> */}
      <blockquote>
      {ty.message}
      </blockquote>
    </figcaption>
  </figure>
)}
  </div>
</>

     );
}

export default Showreview;