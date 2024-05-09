import { Link, useNavigate } from "react-router-dom";
import Package from "../Package";
import { useState ,useEffect } from "react";
import axios from "axios";
import Copy from "./copy";
import Nav from "../nav";
function Packages()
{

  let navigate = useNavigate()
  
  const [userSearch,setuserSearch]=useState({
   name:""
  })
  const handleinput=(e)=>
  {
   // alert(e.target.value)
    
    const name=e.target.name;
    const value=e.target.value;
    setuserSearch({...userSearch,[name]:value});
   
    
  }

  const searchPackage = () =>{
   navigate(`/goapackage/${userSearch.name}`)
  }

  //console.log(userBook)
  const submitSearch=(e)=>
  {
    e.preventDefault()
  console.log()
  
    axios.post("http://localhost:5050/search",{userSearch}).then((response)=>
  {
    console.log(response.status,response.data.token );
  }
  );

  }
  const[package2, setpackage]=useState([]);
  useEffect(()=>
  {
    axios.get("http://localhost:5050/getpackage").then((response)=>
    {
      setpackage(response.data)
    });
  },[]);





    return (  
        <>
        
   <Nav/>
   <br/>
  <div className="wild">
        <div className="inner-banner">
  <div className="container">
    {/* <div className="breadcrumb">
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
    </div> */}
    <div className="intro">
      <h1>
        <span>India Tour</span> Tour Packages
      </h1>
      <p>
      India, the world’s 7th biggest country by area, and one of the oldest civilizations in the world, has lots to offer to the travellers around the world. Explore the diversity of incredible India with our India tour packages that let you explore the magnificence of nature; thrill of adventure; rich heritage; soul-soothing spirituality and vibrant culture. Come and explore the best of India with our Indian holiday packages.
      </p>
      
    </div>
  </div>
  <img style={{marginLeft:900}}
    className="banner-inner"
    src="https://www.tourmyindia.com/packages-tour-india/image/india-tour-banner.webp"
    alt="India Wildlife"
  />
</div>

</div>
  {/* Navbar & Hero End */}
  {/* Package Start */}
  {/* <Package/> */}
  {/* <Copy/> */}

{/* <div className="h">
  <div className="card">
  <p>
    A glass-like card to demonstrate the{" "}
    <strong>Glassmorphism UI design</strong> trend.
  </p>
  <p className="card-footer">Created by Rahul C.</p>
</div>

</div> */}
  
  {/* <div className="container-xxl py-5">
 
          <div className="container">
          
            <div className="row g-4 justify-content-center">
            {package1.map((ty)=>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="package-item">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              
                  <div className="overflow-hidden">
                  <Link to={`/goapackage/${ty.name}`} >  <img className="img-fluid" src={ty.pic} alt="" style={{width:350,height:200}}/></Link>
                  </div>
              
                  <div className="text-center p-4">
                  <Link to={`/goapackage/${ty.name}`} >  <h3 className="mb-0 " >{ty.name}</h3></Link>
                   
                    <p>
                      {ty.data}
                    </p>
                   
               </div>
              
                  </div>
                </div>
              </div>
                )}
            </div>
      
            
          </div>
            
        </div> */}
         <div className="wild" >
         <div className="intro">
         <div className="inner-banner">
  <div className="container">
      <h1>
        Category Wise <span style={{color:"#ff6612",fontfamily:"SFProDisplay-Bold"}}> Tour Packages</span>
      </h1>
  
      </div></div>
    </div></div>
        <div className="container-xxl py-5">
 
 <div className="container">
 
   <div className="row g-4 justify-content-center">

     <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
       <div className="package-item">
       <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
     
         <div className="overflow-hidden">
         <Link to="/wild" >  <img className="img-fluid" src="https://www.tourmyindia.com/imgnew/india-holiday-wildlife.webp" alt="" style={{width:350,height:200}}/></Link>
         </div>
         
     
         <div className="text-center p-4">
         <Link to="/wild" >  <h3 className="mb-0 " >WILDLIFE</h3></Link>
          
           <p>
         
           </p>
          
      </div>
     
         </div>
       </div>
     </div>
     <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
       <div className="package-item">
       <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
     
         <div className="overflow-hidden">
         <Link to="/heritage" >  <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ-bVoh-KoIeE3OFJ2BzzO-zVzpAGPNUZIDg&usqp=CAU" alt="" style={{width:350,height:200}}/></Link>
         </div>
     
         <div className="text-center p-4">
         <Link to="/heritage" >  <h3 className="mb-0 " >HERITAGE</h3></Link>
          
           <p>
         
           </p>
          
      </div>
     
         </div>
       </div>
     </div>
     <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
       <div className="package-item">
       <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
     
         <div className="overflow-hidden">
         <Link to="/pilgrimage" >  <img className="img-fluid" src="https://www.gotouttarakhand.com/wp-content/uploads/2022/09/Kedarnath-Yatra-Plan.jpg" alt="" style={{width:350,height:200}}/></Link>
         </div>
     
         <div className="text-center p-4">
         <Link to="/pilgrimage" >  <h3 className="mb-0 " >PILGRIMAGE</h3></Link>
          
           <p>
         
           </p>
          
      </div>
     
         </div>
       </div>
     </div>
   </div>

   
 </div>
   
</div>
<div className="container-xxl py-5">
 
 <div className="container">
 
   <div className="row g-4 justify-content-center">

     <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
       <div className="package-item">
       <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
     
         <div className="overflow-hidden">
         <Link to="/hill" >  <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmyKb7KEd7OXH5wJIlvIHwG9CVIJiznyT5Wg&usqp=CAU" alt="" style={{width:350,height:200}}/></Link>
         </div>
     
         <div className="text-center p-4">
         <Link to="/hill" >  <h3 className="mb-0 " >HILL STATION</h3></Link>
          
           <p>
         
           </p>
          
      </div>
     
         </div>
       </div>
     </div>
     <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
       <div className="package-item">
       <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
     
         <div className="overflow-hidden">
         <Link to="/adven" >  <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvKmOwje8u-uX91iPhpzTIe3ik1RgdsCr6g&usqp=CAU" alt="" style={{width:350,height:200}}/></Link>
         </div>
     
         <div className="text-center p-4">
         <Link to="/adven" >  <h3 className="mb-0 " >ADVENTURE</h3></Link>
          
           <p>
         
           </p>
          
      </div>
     
         </div>
       </div>
     </div>
     <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
       <div className="package-item">
       <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
     
         <div className="overflow-hidden">
         <Link to="/beach" >  <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPnjduZ3USde5jwtd5lCR-GL5VK0Vicb7Cw&usqp=CAU" alt="" style={{width:350,height:200}}/></Link>
         </div>
     
         <div className="text-center p-4">
         <Link to="/beach" >  <h3 className="mb-0 " >BEACH</h3></Link>
          
           <p>
         
           </p>
          
      </div>
     
         </div>
       </div>
     </div>
   </div>

   
 </div></div>
 <div className="wild" >
         <div className="intro">
         <div className="inner-banner">
  <div className="container">
      <h1>
        City Wise <span style={{color:"#ff6612",fontfamily:"SFProDisplay-Bold"}}> Tour Packages</span>
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

export default Packages
;