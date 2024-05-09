import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
import Guides from "../Guides";
import Nav from "../nav";
function About1() {
  const[guide, setguide]=useState([]);
  useEffect(()=>
  {
    axios.get("http://localhost:5050/getGuide").then((response)=>
    {
      setguide(response.data)
    });
  },[]);
    return (  
      
        <>
  <Nav/>
  <br/>
  <div className="aaaa"><h1 style={{marginLeft:510,paddingTop:160,fontSize:60,color:"white"}}>About Us</h1></div>
  {/* <div className="aboutt" style={{background: "linear-gradient(rgba(30, 30, 32, .4), rgba(30, 30, 32, .4)), url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdXAlMjB0cmF2ZWx8ZW58MHx8MHx8&w=1000&q=80",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:300,width:1350}} >
</div> */}
  {/* <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdXAlMjB0cmF2ZWx8ZW58MHx8MHx8&w=1000&q=80" style={{height:300,width:1350}}/> */}

  {/* Navbar & Hero End */}
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      
     
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item roun">
            <div className="p-4">
            
              <h5>All India tours</h5>
              <p>
             From the majestic Himalayas in the North to the backwaters of Kerala in the South, We offers a plethora of experiences that are sure to leave a lasting impression on your mind.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item rounded ">
            <div className="p-4">
              
              <h5> Handpicked Hotels</h5>
              <p>
              A unique collection of luxury country hotels that allow you to escape the everyday and explore India at its best.we are here to create an unforgettable experience for you.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item rounded ">
            <div className="p-4">
            
              <h5>  Best Food</h5>
              <p>
               Our Organization provide Life time food and heritage experience.We aim to provide customers with supreme taste,
impressive quality service and pleasant dining
experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="service-item rounded ">
            <div className="p-4">
          
              <h5> Affordable Trips</h5>
              <p>
              Browse our best customized affordable holiday packages and explore historical places, pristine beaches,Goa, Rishikesh, Alleppey, Jaipur, Meghalaya, Udaipur, scenic hill stations and much more.

              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item rounded ">
            <div className="p-4">
              
              <h5>Fun Activities</h5>
              <p>
              Do you have a vacation scheduled but not sure which activities to include on your vacation checklist? From free walking tours, food tours , water activities , paragliding to skeeing , snow activities
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item rounded ">
            <div className="p-4">
            
              <h5> 24/7 Service</h5>
              <p>
                We provide 24/7 free services .you can call at anytime and tell us about any minor inconvenience we will make sure to sort any kind of problem , to make your tour experience better
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item rounded ">
            <div className="p-4">
            
              <h5>Travel Guides</h5>
              <p>
              Tour guides provide many services, and their responsibilities depend on the type of tour guide they are.tour guides are typically responsible for entertaining guests, answering questions .
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="service-item rounded ">
            <div className="p-4">
          
              <h5>Event Management</h5>
              <p>
            We do the management of events like bon firee, dj systems. Event management is the process of creating and maintaining an event.  planning all the way to post-event strategizing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* Testimonial Start */}
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="text-center">
      
       
      </div>
      
    </div>
    </div>

{/* <Guides/> */}
  <div className="container">
    <div className="row text-center">
    {guide.map((ty)=>
     
      <div className="col-xl-4 col-sm-6 mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="bg-white rounded shadow-sm py-5 px-4">
          <img
          // "https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg"
            src={ty.pic}
            alt=""
            width={100}
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 className="mb-0">{ty.name}</h5>
          <span className="small text-uppercase text-muted">{ty.data} </span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
       

    
      )}
    </div>
  

  </div>


</>

    );
}

export default About1;