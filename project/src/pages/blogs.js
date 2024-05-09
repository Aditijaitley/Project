import Nav from "../nav";
import { Link  } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
function Blogs() {
  const[blog, setblog]=useState([]);
  useEffect(()=>
  {
    axios.get("http://localhost:5050/getblog").then((response)=>
    {
      setblog(response.data)
    });
  },[]);
    return ( 
        <>

        <Nav/>
       
      <div className="blogs2">
      <div
  className="top_site_main"
  style={{
    color: "rgb(255, 255, 255)",
    backgroundColor: "rgb(0, 0, 0)",
    backgroundImage:
      'url("https://onlinetourandtravel.com/wp-content/uploads/2023/04/Kashmir-Tour.webp")',
    paddingTop: 146
  }}
>
  <div className="banner-wrapper container article_heading">
    <div className="breadcrumbs-wrapper">
      <ul className="phys-breadcrumb">
        <li>
          <a href="https://onlinetourandtravel.com/" className="home">
            
          </a>
        </li>
        <li></li>
      </ul>{" "}
    </div>
    <h1 className="heading_primary"></h1>{" "}
    <br/>  <br/>  <br/> <br/>  <br/>  <br/> 
  </div>
</div>

        <div className="col-md-12">
  <div className="top_heading text-center">
    <h1>India Travel &amp; Tourism Blog</h1>
    <p>
      Looking for something useful to read about travelling in India? You’ve
      come to the right place. Join the league of readers who find here detailed
      insights, interesting travel tips and ideas and daily inspiration.
    </p>
  </div>
</div>
</div>





        <div className="container">
       <div className="blogs1">
  <div className="row">
  {blog.map((ty)=>
    <div className="col-xl-4">
  <div className="container">
    <div className="square">
      <img
        src={ty.pic}
        className="mask"
      />
      
      <div className="h1" style={{height:80}}>{ty.title}</div>
   
      <p>
        {ty.des}.
      </p>
      <div>

        <Link to={`/blogdetail/${ty._id}`}
       
    
          className="button"
        >
          Read More <i className="fa fa-angle-right" />
        </Link>
      </div>
    </div>
    </div>  </div> )}

  </div>
  </div>
  </div>
</>

     );
}

export default Blogs;