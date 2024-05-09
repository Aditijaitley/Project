import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";
import Nav from "../nav";
function Wild() {
    const[package2, setgoapackage]=useState([]);

  useEffect(()=>
  {
    axios.get("http://localhost:5050/getwild").then((response)=>
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
        <li>
          <a href="https://www.tourmyindia.com">Home</a>
        </li>
        <li>/</li>
        <li>
          <a href="https://www.tourmyindia.com/packages-tour-india/">
            Tour Packages
          </a>
        </li>
        <li>/</li>
        <li className="active">
          <a>Wildlife Tours</a>
        </li>
      </ul>
    </div>
    <div className="intro">
      <h1>
        <span>India Wildlife</span> Tour Packages
      </h1>
      <p>
        India’s national parks &amp; wildlife sanctuaries are home to a rich
        flora &amp; fauna, and a Wildlife Safari, with its fair share of thrill
        &amp; adventure, is the best way of exploring it. For all the wildlife
        enthusiasts, we offer you a variety of wildlife holiday packages at
        unbeatable prices &amp; deal, which let you spot the rich wildlife of
        India at the most famous national parks and wildlife sanctuaries like
        Kanha, Bandhavgarh, Pench, Gir, Corbett, Ranthambore &amp; Kaziranga.
        From the majestic Royal Bengal Tiger to the rare &amp; endangered One
        Horned Rhinoceros, spot the exotic animals while enjoying a safari with
        an expert driver &amp; guide.
      </p>
      
    </div>
  </div>
  <img style={{marginLeft:900}}
    className="banner-inner"
    src="https://www.tourmyindia.com/packages-tour-india/image/wildlife-tour-packages.webp"
    alt="India Wildlife"
  />
</div>

</div>
<div className="wild" >
         <div className="intro">
         <div className="inner-banner">
  <div className="container">
      <h1>
       Explore Wildlife <span style={{color:"#ff6612",fontfamily:"SFProDisplay-Bold"}}> Tour Packages</span>
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

export default Wild;