
import Nav from "../nav";
import { Link } from "react-router-dom";

import { useState ,useEffect } from "react";
import axios from "axios";

function Sikkim() {
  const[package2, setgoapackage]=useState([]);

  useEffect(()=>
  {
    axios.get("http://localhost:5050/getsikkim").then((response)=>
    {
      setgoapackage(response.data)
    });
  },[]);
    return ( 
        <>
        <Nav/>
      <div className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <a href="" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fa fa-map-marker-alt me-3" />
          HIGH ON TRIPS
        </h1>
    
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          {/* <a href="index.html" className="nav-item nav-link active">
            Home
          </a> */}
          <Link to ="/home1" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link">
            About
          </Link>
          {/* <Link to="/services" className="nav-item nav-link">
           Destinations
          </Link> */}
          

          
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
            Destination
            </a>
            


            <div className="dropdown-menu w-800 mt-0" aria-labelledby="navbarDropdown"
            style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
              <div className="container-fluid">
  <div className="row my-4">
    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
      <div className="list-group list-group-flush">
        <p className="mb-0 list-group-item text-uppercase font-weight-bold">
         <b>NORTH</b>
        </p>
      
        <a href="" className="list-group-item list-group-item-action">
          Amritsar
        </a>
        <a href="" className="list-group-item list-group-item-action">
         Manali
        </a>
        <a href="" className="list-group-item list-group-item-action">
         Kashmir
        </a>
        <a href="" className="list-group-item list-group-item-action">
         Ladakh
        </a>
        <a href="" className="list-group-item list-group-item-action">
         Chandigarh
        </a>
    </div>
    </div>

    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
      <div className="list-group list-group-flush">
        <p className="mb-0 list-group-item text-uppercase font-weight-bold">
         <b>South</b>
        </p>
        <a href="" className="list-group-item list-group-item-action">
          Mysore
        </a>
        <a href="" className="list-group-item list-group-item-action">
          Kerala
        </a>
        <a href="" className="list-group-item list-group-item-action">
         Munnar
        </a>
        <a href="" className="list-group-item list-group-item-action">
         Wayanand
        </a>
        <a href="" className="list-group-item list-group-item-action">
         Hyderabad
        </a>
        
      </div>
    </div>
    <div className="col-md-6 col-lg-3 mb-3 mb-md-0">
      <div className="list-group list-group-flush">
        <p className="mb-0 list-group-item text-uppercase font-weight-bold">
          <b>EAST</b>
        </p>
        <a href="" className="list-group-item list-group-item-action">
          Assam
        </a>
        <a href="" className="list-group-item list-group-item-action">
          Darjeeling
        </a>
        <a href="" className="list-group-item list-group-item-action">
          Gangtok
        </a>
        <a href="" className="list-group-item list-group-item-action">
          Meghalaya
        </a>
        <a href="" className="list-group-item list-group-item-action">
          Sikkim
        </a>
      </div>
    </div>
    <div className="col-md-6 col-lg-3">
      <div className="list-group list-group-flush">
        <p className="mb-0 list-group-item text-uppercase font-weight-bold">
          <b>WEST</b>
        </p>
        <Link to="/goa" className="list-group-item list-group-item-action ">
          Goa
        </Link>
        <a href="" className="list-group-item list-group-item-action">
          Jaipur
        </a>
        <a href="" className="list-group-item list-group-item-action">
          Udaipur
        </a>
        <a href="" className="list-group-item list-group-item-action">
          Mumbai
        </a>
        <a href="" className="list-group-item list-group-item-action">
          Rajasthan
        </a>
      </div>
    </div>

</div>

    </div>
     
            </div>
          </div>

          <Link to="/packages" className="nav-item nav-link dropdown">
            Packages
          </Link>

          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
             Explore
            </a>
            <div className="dropdown-menu m-0">
            <Link to="/join" className="dropdown-item">
                Join Us
              </Link>
              <Link to="/blogs" className="dropdown-item">
               Blogs
              </Link>
              <Link to ="/gallery" className="dropdown-item">
              Image Gallery
              </Link>
              <Link to="/event" className="dropdown-item">
               Events
              </Link>
             
              <Link to="/showrev" className="dropdown-item">
                Testimonial
              </Link>
           
            </div>
          </div>

          <Link to="/contact"className="nav-item nav-link">Contact</Link>
        </div>
        <Link to="/login" className="btn btn-primary rounded-pill py-2 px-4">
        Login
        </Link> 
        {/* <h2 className="text-primary m-0">
          <Link to="/login"className="nav-item nav-link"><i className="fa fa-map-marker-alt " style={{color:"#2C3E50"}}/></Link>
         
        </h2> */}
      </div>
    </nav></div>
    
     <video className="img-fluid position-absolute  " style={{ objectFit: "cover",height:350,width:1500 }}  controls="true" autoPlay="true" loop="true">
  <source src="video/sikkim.mp4" type="video/mp4" />
 </video>
 <br/>
<br/>
<br/>
 <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


     <div className="container">
     <div className="goaback">
    <div className="row">
    <div className="col-xl-12 col-sm-6">
         {/* <video className="img-fluid position-absolute " style={{ objectFit: "cover",height:520,width:530 }}  controls="true" autoPlay="true" loop="true">
  <source src="video/goa.mp4" type="video/mp4" /><br/>
<br/>
<br/>
<br/>

 </video> */}


</div>
<div className="col-xl-12 col-sm-6">
<div className="container">
     
        
     <div className="hs-overview">
     <br/>
<br/>
<br/><br/>
<br/>

   
     <h1 className="" >Sikkim</h1>
 <div
   className="js-dynamic-height taj"
   data-maxheight={500}
   data-itemheight={500}
 >
   <div className="dynamic-wrap xlarge  lh17em" style={{ maxHeight: 450,color:"black" }}>
   
     
     
     {/* <p>
       Goa is situated in west India bounded by{" "}
       <a href="/india/karnataka/" title="Top Destination in Karnataka" style={{color:"black" }}>
        <b> Karnataka</b>
       </a>{" "}
       in the east and{" "}
       <a href="/india/maharashtra/" title="Top Destination in Maharashtra"style={{color:"black" }}>
         <b>Maharashtra</b>
       </a>{" "}
       in the north. The western side of Goa is a long coastline of Arabian
       Sea. This is what makes Goa such a sought after place. It is India's
       smallest state. The region in which Goa is located is known as{" "}
       <strong>Konkan</strong>.
     </p>
     <br /> */}
     <p>
     Sikkim, state in India,is located in the northeastern part of the country, in the eastern Himalayas. It is one of the smallest states in India. Sikkim is bordered by the Tibet Autonomous Region of China to the north and northeast, by Bhutan to the southeast, by the Indian state of West Bengal to the south, and by Nepal to the west. The capital is Gangtok, in the southeastern part of the state

A part of the Eastern Himalaya, Sikkim is notable for its biodiversity, including alpine and subtropical climates, as well as being a host to Kangchenjunga, the highest peak in India and third highest on Earth. Sikkim's capital and largest city is Gangtok. Almost 35% of the state is covered by the Khangchendzonga National Park.

Long a sovereign political entity, Sikkim became a protectorate of India in 1950 and an Indian state in 1975. Its small size notwithstanding, Sikkim is of great political and strategic importance for India because of its location along several international boundaries. Area 2,740 square miles (7,096 square km). Pop. (2011) 607,688.
       
     </p>
  
     
   </div>
   <a
     className="js-dynamic-show-hide dib mt10px"
     title="Read More"
     data-replace-text="Read Less"
     style={{ display: "inline-block" }}
   >
    
   </a>
 </div>
</div>
</div>
</div>
    </div></div>



<div className="wild" >
         <div className="intro">
         <div className="inner-banner">
  <div className="container" style={{marginLeft:150}}>
      <h1>
       Explore Sikkim<span style={{color:"#ff6612",fontfamily:"SFProDisplay-Bold"}}> Tour Packages</span>
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

</div>


        </>
     );
}

export default Sikkim;




