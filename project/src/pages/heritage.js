import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";
import Nav from "../nav";
function Heritage() {
    const[package2, setgoapackage]=useState([]);

  useEffect(()=>
  {
    axios.get("http://localhost:5050/getheri").then((response)=>
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
        
        <li>/</li>
        <li className="active">
          <a>Heritage tours</a>
        </li>
      </ul>
    </div>
    <div className="intro">
      <h1>
        <span>Heritage</span> Tour Packages
      </h1>
      <p>
      With a rich and diverse history and culture, India is a perfect destination for heritage tours. There are a plethora of heritage sites in India including one of the seven wonders of the world, Taj Mahal that people come to witness from all over the world. With our best heritage tour packages, explore the top historical heritage sites and cultural heritage in India to learn more about the country. We offer the best of our services in the heritage tours by arranging expert tour guides, transportation, and accommodations and ensuring a memorable experience.
      </p>
      
    </div>
  </div>
  <img style={{marginLeft:900}}
    className="banner-inner"
    src="https://www.tourmyindia.com/packages-tour-india/image/heritage-banner.webp"
    alt="India Wildlife"
  />
</div>

</div>
<div className="wild" >
         <div className="intro">
         <div className="inner-banner">
  <div className="container">
      <h1>
       Explore Heritage <span style={{color:"#ff6612",fontfamily:"SFProDisplay-Bold"}}> Tour Packages</span>
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

export default Heritage;