import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";
import Nav from "../nav";
function Hill() {
    const[package2, setgoapackage]=useState([]);

  useEffect(()=>
  {
    axios.get("http://localhost:5050/gethill").then((response)=>
    {
      setgoapackage(response.data)
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
          <a>Hill Stations</a>
        </li>
      </ul>
    </div>
    <div className="intro">
      <h1>
        <span>Hill Stations in </span> India
      </h1>
      <p>
      The Himalayan belt in the north and northeast, and the Nilgiris in the south bless India with picturesque hill stations that have also once been the retreats for the British rulers as well. For your best holiday in India, we offer you the finest hill station tour packages that come packed with top destinations like J&K, Himachal, Ladakh, Uttarakhand, and Sikkim; sightseeing tour; accommodation arrangements; and adventure activities. With our selection of choicest hill station vacation packages enjoy the best summer holiday, school excursions, corporate outings or that ideal honeymoon you have been planning.


      </p>
      
    </div>
  </div>
  <img style={{marginLeft:900}}
    className="banner-inner"
    src="https://www.tourmyindia.com/packages-tour-india/image/hill-station-banner.webp"
    alt="India Wildlife"
  />
</div>

</div>
<div className="wild" >
         <div className="intro">
         <div className="inner-banner">
  <div className="container">
      <h1>
       Explore Hill <span style={{color:"#ff6612",fontfamily:"SFProDisplay-Bold"}}> Tour Packages</span>
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

export default Hill;