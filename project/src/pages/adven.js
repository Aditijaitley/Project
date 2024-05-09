import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";
import Nav from "../nav";
function Adven() {
    const[package2, setgoapackage]=useState([]);

  useEffect(()=>
  {
    axios.get("http://localhost:5050/getadven").then((response)=>
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
          <a>Adventure tours</a>
        </li>
      </ul>
    </div>
    <div className="intro">
      <h1>
        <span>Adventure</span> Tour Packages
      </h1>
      <p>
      Looking for a destination that satiates your thirst for adventure? Look no further, as India offers you a plethora of adventure activities, with the experience promising to be unparalleled. India offers numerous opportunities to give you that ultimate adrenaline rush with activities like trekking and mountaineering/peak climbing in the majestic Himalayas; river rafting in the unbridled rivers; mountain biking and motor biking on some challenging yet scenic trails; and jeep safari to rugged offbeat destinations. We at Tour My India make adventure holidays in India memorable, and at the same time, safe.
      </p>
      
    </div>
  </div>
  <img style={{marginLeft:900}}
    className="banner-inner"
    src="https://www.tourmyindia.com/packages-tour-india/image/adventure-banner.webp"
    alt="India Wildlife"
  />
</div>

</div>

        <div className="wild" >
         <div className="intro">
         <div className="inner-banner">
  <div className="container">
      <h1>
       Explore Adventure<span style={{color:"#ff6612",fontfamily:"SFProDisplay-Bold"}}> Tour Packages</span>
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

export default Adven;