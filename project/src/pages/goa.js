
import Nav from "../nav";
import { Link } from "react-router-dom";

import { useState ,useEffect } from "react";
import axios from "axios";

function Goa() {
  const[package2, setgoapackage]=useState([]);

  useEffect(()=>
  {
    axios.get("http://localhost:5050/getgoa").then((response)=>
    {
      setgoapackage(response.data)
    });
  },[]);
    return ( 
        <>
        <Nav/>
     
    
     <video className="img-fluid position-absolute  " style={{ objectFit: "cover",height:350,width:1500 }}  controls="true" autoPlay="true" loop="true">
  <source src="video/goa.mp4" type="video/mp4" />
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

   
     <h1 className="" >GOA</h1>
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
       Goa is known for its majestic beaches and religious places. It offers
       the feel of Hawaii but in half the cost of it. The beaches there are
       categorized mainly as northern Goa beaches and southern Goa beaches.
       
     </p>
  
     <p>
     Activities in Goa
       means a whole set of water adventures. from simple boating to all types
       water sports activities can be enjoyed at this tiny state of India.
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

<br/>






<div className="wild" >
         <div className="intro">
         <div className="inner-banner">
  <div className="container" style={{marginLeft:150}}>
      <h1>
       Explore Goa<span style={{color:"#ff6612",fontfamily:"SFProDisplay-Bold"}}> Tour Packages</span>
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

export default Goa;




