
import Nav from "../nav";
import { Link } from "react-router-dom";

import { useState ,useEffect } from "react";
import axios from "axios";

function Amritsar() {


    
  const[package2, setgoapackage]=useState([]);

  useEffect(()=>
  {
    axios.get("http://localhost:5050/getamrit").then((response)=>
    {
      setgoapackage(response.data)
    });
  },[]);
    return ( 
        <>
        <Nav/>
      
    <br/>
     <video className="img-fluid position-absolute  " style={{ objectFit: "cover",height:350,width:1500 }}  controls="true" autoPlay="true" loop="true">
  <source src="video/amritsar.mp4" type="video/mp4" />
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
    <div className="col-xl-6 col-sm-6">
         {/* <video className="img-fluid position-absolute " style={{ objectFit: "cover",height:520,width:530 }}  controls="true" autoPlay="true" loop="true">
  <source src="video/goa.mp4" type="video/mp4" /><br/>
<br/>
<br/>
<br/>

 </video> */}
   {/* <div className="goaback1">
 <div className="carousel-wrapper">
  <div className="carousel-container">
    <div className="carousel">
      <div className="image-one"  style={{ backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUzdM8eUBbRkPvkoe39jRbR-kM2GtQCipbg&usqp=CAU"}}/>
      <div className="image-two" style={{ backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUzdM8eUBbRkPvkoe39jRbR-kM2GtQCipbg&usqp=CAU"}} />
      <div className="image-three" style={{ backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUzdM8eUBbRkPvkoe39jRbR-kM2GtQCipbg&usqp=CAU"}}/>
    </div>
  </div>
  </div>
</div> */}

</div>
<div className="col-xl-12 col-sm-6">
<div className="container">
     
        
     <div className="hs-overview">
     <br/>
<br/>
<br/><br/>
<br/>

   
     <h1 className="" >AMRITSAR</h1>
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
     Amritsar is a city of great virtue where the present has been shaped by its remarkable past. This holy city pays its fealty to the sacrifices of its ancestors by commemorating their heroism and hardship. The city is known for its vibrant rich culture, glorious sites, fertile soil, and appetizing food.
     </p>
  
     <p>
     Amritsar city is situated in northern Punjab state, northwestern India. It lies around 15 miles (25 km) east of the border with Pakistan. The city is the holy center for the Sikh religion and the administrative headquarters of the Amritsar district in the state of Punjab.
     </p>{" "}
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
<br/>
{/* <div className="best-time-visit-outer">
  <div className="container">
    <div className="best-time-visit-main">
      <div className="heading-h2">
      <h1 className="mb-5" style={{marginLeft:300}}>Best Time To Visit in Goa</h1>
       
      </div>
      <div className="best-box">
        <div className="best-visit-ico">
          <img src="https://www.tourmyindia.com/states/goa/image/summer-ico.png" alt="Summer Season in Karnataka" />
        </div>
        <div className="best-visit-details">
          <h4>Summer Season in Goa</h4>
          <p>
            The summer season between March and June in Goa is quite hot with
            temperature ranging between 25°C and 40°C.
          </p>
        </div>
      </div>
      <div className="best-box">
        <div className="best-visit-ico">
          <img src="https://www.tourmyindia.com/states/goa/image/mansoon-ico.png" alt="Monsoon Season in Karnataka" />
        </div>
        <div className="best-visit-details">
          <h4>Monsoon Season in Goa</h4>
          <p>
            Monsoon in Goa is between July and August. Goa receives medium to
            high rainfall leaving beaches closed but the state greener.
          </p>
        </div>
      </div>
      <div className="best-box">
        <div className="best-visit-ico">
          <img src="https://www.tourmyindia.com/states/goa/image/winter-ico.png" alt="Winter Season in Karnataka" />
        </div>
        <div className="best-visit-details">
          <h4>Winter Season in Goa</h4>
          <p>
            Winter season is from November to February and is the best time to
            plan a visit to Goa.
          </p>
        </div>
      </div>
    </div>
  </div>
</div> */}

<br/>

<br/>


{/* <div
              className="col-lg-12 col-md-12 wow zoomIn"
              data-wow-delay="0.1s"
            >
 <div className="container-xxl py-5  destination">
    <div className="containe-fluid">
<h1 className="mb-5" style={{marginLeft:350}}>Popular Destination</h1>
  <div
    id="carouselExampleControls"
    className="carousel carousel-dark slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="card-wrapper d-flex  justify-content-around">
          <div className="card  " style={{ width: 330}}>
            <img
              src="https://www.tourmyindia.com/states/goa/image/agonda-beach.webp"
              className="card-img-top"
              alt="..."
            />
         <div className="card-body">
              <h5 className="card-title">Mumbai</h5>
              <p>Agonda Beach is perfect for swimming and chilling. It is also great for taking a boat ride and enjoying the expanse of the sea and the beauty of nearby Butterfly and Honeymoon Beaches.</p>
            </div>
          </div>
       
          <div className="card" style={{ width: 330}}>
            <img
              src="https://www.tourmyindia.com/states/goa/image/baga-beach.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Mumbai</h5>
            </div>
          </div>
          <div className="card  " style={{ width: 330}}>
            <img
              src="https://www.tourmyindia.com/states/goa/image/palolem-beach.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Kashmir</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card-wrapper container-sm d-flex   justify-content-around">
        <div className="card  " style={{ width: 330}}>
            <img
              src="https://www.tourmyindia.com/states/goa/image/agonda-beach.webp"
              className="card-img-top"
              alt="..."
            />
       
          </div>
       
          <div className="card" style={{ width: 330}}>
            <img
              src="https://www.tourmyindia.com/states/goa/image/baga-beach.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Mumbai</h5>
            </div>
          </div>
          <div className="card  " style={{ width: 330}}>
            <img
              src="https://www.tourmyindia.com/states/goa/image/palolem-beach.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Kashmir</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card-wrapper container-sm d-flex  justify-content-around">
          
        <div className="card  " style={{ width: 330}}>
            <img
              src="https://www.tourmyindia.com/states/goa/image/agonda-beach.webp"
              className="card-img-top"
              alt="..."
            />
       
          </div>
       
          <div className="card" style={{ width: 330}}>
            <img
              src="https://www.tourmyindia.com/states/goa/image/baga-beach.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Mumbai</h5>
            </div>
          </div>
          <div className="card  " style={{ width: 330}}>
            <img
              src="https://www.tourmyindia.com/states/goa/image/palolem-beach.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Kashmir</h5>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
        
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{marginRight:145}} />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      
      >
        <span className="carousel-control-next-icon" aria-hidden="true" style={{marginLeft:145}} />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>
</div>



</div> */}
{/* <div
              className="col-lg-12 col-md-12 wow zoomIn"
              data-wow-delay="0.1s"
            >
 <div className="container-xxl py-5  destination">
    <div className="containe-fluid">
<h1 className="mb-5">Popular Activities</h1>
<div
    id="carouselExampleControls"
    className="carousel carousel-dark slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="card-wrapper d-flex  justify-content-around">
          <div className="card  " style={{ width: 330}}>
            <img
              src="https://www.tourmyindia.com/states/goa/image/agonda-beach.webp"
              className="card-img-top"
              alt="..."
            />
       
          </div>
       
          <div className="card" style={{ width: 330}}>
            <img
              src="https://www.tourmyindia.com/states/goa/image/baga-beach.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Mumbai</h5>
            </div>
          </div>
          <div className="card  " style={{ width: 330}}>
            <img
              src="https://www.tourmyindia.com/states/goa/image/palolem-beach.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Kashmir</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card-wrapper container-sm d-flex   justify-content-around">
        <div className="card  " style={{ width: 330}}>
            <img
              src="https://www.tourmyindia.com/states/goa/image/agonda-beach.webp"
              className="card-img-top"
              alt="..."
            />
       
          </div>
       
          <div className="card" style={{ width: 330}}>
            <img
              src="https://www.tourmyindia.com/states/goa/image/baga-beach.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Mumbai</h5>
            </div>
          </div>
          <div className="card  " style={{ width: 330}}>
            <img
              src="https://www.tourmyindia.com/states/goa/image/palolem-beach.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Kashmir</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card-wrapper container-sm d-flex  justify-content-around">
          
        <div className="card  " style={{ width: 330}}>
            <img
              src="https://www.tourmyindia.com/states/goa/image/agonda-beach.webp"
              className="card-img-top"
              alt="..."
            />
       
          </div>
       
          <div className="card" style={{ width: 330}}>
            <img
              src="https://www.tourmyindia.com/states/goa/image/baga-beach.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Mumbai</h5>
            </div>
          </div>
          <div className="card  " style={{ width: 330}}>
            <img
              src="https://www.tourmyindia.com/states/goa/image/palolem-beach.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Kashmir</h5>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
        
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{marginRight:145}} />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      
      >
        <span className="carousel-control-next-icon" aria-hidden="true" style={{marginLeft:145}} />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>
</div>



</div> */}



<div className="wild" >
         <div className="intro">
         <div className="inner-banner">
  <div className="container">
      <h1 style={{marginLeft:50}}>
       Explore Amritsar<span style={{color:"#ff6612",fontfamily:"SFProDisplay-Bold" }}> Tour Packages</span>
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

export default Amritsar;




