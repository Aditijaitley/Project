import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";
import Nav from "../nav";
function Beach() {
    const[package2, setgoapackage]=useState([]);

  useEffect(()=>
  {
    axios.get("http://localhost:5050/getbeach").then((response)=>
    {
      setgoapackage(response.data)
    });
  },[]);
    return ( 
        <>
        <Nav/>
        <br/>
        <div className="wild">
        <div className="inner-banner">
  <div className="container">
    <div className="breadcrumb">
      <ul>
      <Link to ="/home1">
        <li>
          <a href="https://www.tourmyindia.com">Home</a>
        </li>
        </Link>
        
        <li>/</li>
        <li>
          <a href="https://www.tourmyindia.com/packages-tour-india/">
            Tour Packages
          </a>
        </li>
        <li>/</li>
        <li className="active">
          <a>Heritage tours</a>
        </li>
      </ul>
    </div>
    <div className="intro">
      <h1>
        <span>Beach</span> Tour Packages
      </h1>
      <p>
      India has a coastline that stretches 7516 km and has some of the most beautiful beaches ideal for a holiday of a lifetime with friends, family and partner. We offer you amazing sea, sand, and sun vacation with the best beach tour packages in India. With our tour packages, enjoy a vacation at the popular beaches in Goa, Andaman Islands, and Kerala as well as on some lesser-known yet gorgeous beaches of Karnataka, Maharashtra, Tamil Nadu, Pondicherry, Odisha, and West Bengal. The good times begin with us and our incredible beach tour packages in India.
      </p>
      
    </div>
  </div>
  <img style={{marginLeft:900}}
    className="banner-inner"
    src="https://www.tourmyindia.com/packages-tour-india/image/beach-banner.webp"
    alt="India Wildlife"
  />
</div>

</div>
<div className="wild" >
         <div className="intro">
         <div className="inner-banner">
  <div className="container">
      <h1>
       Explore Wild<span style={{color:"#ff6612",fontfamily:"SFProDisplay-Bold"}}> Tour Packages</span>
      </h1>
  
      </div></div>
    </div></div>
<div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
             
            <div className="row g-4 justify-content-center">
            {package2.map((ty)=>
            
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" > 
       <Link to={`/goapackage/${ty.name}`} >         <p>
        <a href="#main-sticky-2">
          <img src="https://www.tourmyindia.com/packages-tour-india/image/small-arrow-left.png" alt="image" />
        </a>
      </p></Link>
                <div className="package-item">
                  <div className="overflow-hidden">
                  <Link to={`/goapackage/${ty.name}`} >      
                    <img className="img-fluid" style={{height:200}} src={ty.pic} width={290} alt="" /></Link>
                  </div>
               
                  <div className="text-center p-4">
                  
            
                    
                   
                  <Link to={`/goapackage/${ty.name}`} >   <h6>
                     {ty.data}
                     </h6></Link>
                  
                  </div>
                </div>
              </div>
             
              )}
            </div>
          </div>
        </div>
        </div>
</>
     );
}

export default Beach;