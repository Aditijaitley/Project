
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../nav";
function Blogdetail() {

    const[blog, setblog]=useState([]);
    let {bid}=useParams()
    useEffect(()=>
    {
      axios.get(`http://localhost:5050/getsingleblog/${bid}`).then((response)=>
      {
        setblog(response.data)
      });
    },[]);;
    
    


    return (
        <>


<Nav/>
          <div className="blogdet">
  <div className="header">
 
  </div>
  <div className="row">
 <div className="col-lg-12"> 
 {blog.map((ty)=>
      <div className="card">
        <h2>{ty.title}</h2>
     
        <div className="fakeimg" style={{ height: 400 }}>
          <img src={ty.pic} style={{ height: 360 ,width:1260}}/>
        </div>
        <p style={{marginLeft:25 , marginRight:25}}>{ty.blog}</p>
        
        <p style={{marginLeft:25 , marginRight:25}}>{ty.blog}</p>
      </div>
)} 
    
 
  </div>
  
  </div>
  </div>
          </>
      );
}

export default Blogdetail;
