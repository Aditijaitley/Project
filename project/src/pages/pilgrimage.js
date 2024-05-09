import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";
import Nav from "../nav";
function Pilgrimage() {
    const[package2, setgoapackage]=useState([]);
    const[package3, setgoapackage1]=useState([]);
  useEffect(()=>
  {
    axios.get("http://localhost:5050/getpil").then((response)=>
    {
      setgoapackage(response.data)
      setgoapackage1(response.data)
    });
  },[]);
    return ( 
        <>
        <Nav/>
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
       
        <li>/</li>
        <li className="active">
          <a>Pilgrimage tours</a>
        </li>
      </ul>
    </div>
    <div className="intro">
      <h1>
        <span>Pilgrimage</span> Tour Packages
      </h1>
      <p>
      India is home to many sacred worship places spread across its length and breadth making it a top pilgrimage destination. There are innumerable Hindu and Jain Temples, gurudwaras, churches, mosques, and Buddhist Monasteries, which make a rare sight anywhere else in the world. We offer the best pilgrimage tours in India that assist you to top religious sites right from Mata Vaishno Devi to Amarnath Cave to Shirdi to Hazratbal and from Bada Chardham to Chhota Chardham to Tirupati Balaji to Golden Temple. We promise a memorable experience steeped in spirituality and comfort.
      </p>
      
    </div>
  </div>
  <img style={{marginLeft:900}}
    className="banner-inner"
    src="https://www.tourmyindia.com/packages-tour-india/image/pilgrimage-banner.webp"
    alt="India Wildlife"
  />
</div>

</div>   

<div className="wild" >
         <div className="intro">
         <div className="inner-banner">
  <div className="container">
      <h1>
       Explore Pilgrimage <span style={{color:"#ff6612",fontfamily:"SFProDisplay-Bold"}}> Tour Packages</span>
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

export default Pilgrimage;