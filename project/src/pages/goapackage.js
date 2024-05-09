import Nav from "../nav";
import { useState ,useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function GoaPackage() {
  const[package2, setgoapackage]=useState([]);
  let {pname}=useParams()
  useEffect(()=>
  {
    axios.get(`http://localhost:5050/goapackage/${pname}`).then((response)=>
    {
      setgoapackage(response.data)
    });
  },[]);


  let userLoginStatus = true
  let userLogStatus = false
  console.log(localStorage.getItem("uinfo"))
  let udaya = JSON.parse(localStorage.getItem("uinfo"))
  if (localStorage.getItem("uinfo") === null) {
    userLoginStatus = false
    userLogStatus = true
    
  }
    return ( 
        <>
        
        <Nav/>
 {/* <img src="img/aditi.jpeg" width={100} height={100}/> */}
        <br/> <br/>
      <img src="https://blog-content.ixigo.com/wp-content/uploads/2019/08/blogpmmodi1.jpg" style={{height:300,width:1350}}/>    <br/> <br/> <br/>   

        <div className="jammu-outer">
  <div className="container">
    <h1 style={{marginLeft:370}}>
      Exciting  <span style={{ color:" #f56502"}}>Packages</span>
    </h1>
    <div className="heritage-tourism">
      <p>
        Tourmyindia.com offers a range of tours to India for international
        travelers looking forward to experience the different aspects of India.
        Our tours are backed by the professional experience of veteran travel
        experts on India, who always try to bring freshness in their approach
        and believe in showing the best of India to the tourists without making
        them go through the obvious. For the tourists coming to India, it is
        quite difficult to get so many choices in tours on India anywhere else.
        From Adventure tours to Wildlife Tours, from Culture tours to Heritage
        tours, from Desert tours to Backwater tours, from Beach tours to Tribal
        tours, and from Cuisine tours to omnipresent Golden Triangle tours -
        tour offers for India from tourmyindia are irresistible and unending.
        Just select the best tour package of india, you like from stable and
        mail us immediately. We will make sure that you get the best while you
        are traveling. In case, you want some modification on the tours given
        below or need something of your on choice, don't be disappointed. Write
        us with your exact requirements and we'll create a tour package that you
        always dreamt off.
      </p>
    </div>
  </div>
</div>



        <div className="texts2" 
        // style={{background:"img/aditi.jpeg"}}
        >
        <div className="texts" >

        {/* <section>
        
  <div className="content"  style={{marginLeft:650 }}>
    <h2>Packages</h2>
    <h2>Packages</h2>
  </div>
</section> */}
<br/>
        <br/>


        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              {/* <h1 className="mb-5" style={{marginRight:200 , marginLeft:180}}>Packages</h1> */}
            <div className="row g-4 justify-content-center">
            {package2.map((ty)=>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" > 
                <div className="package-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" style={{height:200}} src={ty.pic} width={290} alt="" />
                  </div>
                  <div className="d-flex border-bottom">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                    {ty.name}
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      {/* <i className="fa fa-calendar-alt text-primary me-2" />{ty.days} */}
                      <i className="fa fa-clock-o" /> {ty.days}
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-user text-primary me-2" />Per Person
                    </small>
                    </div>
                    <div className="d-flex border-bottom">
                    <small className="flex-fill text-center border-end py-2">
                      {/* <i className="fa fa-calendar-alt text-primary me-2" />{ty.days} */}
                      <i className="fa fa-clock-o" /> Food included
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-user text-primary me-2" />Activities included
                    </small>
                  </div>
                  <div className="text-center p-4">
                  
                  <h3>    <span className="dif"style={{color:"red"}}>
          <i className="fa fa-inr" /> {ty.rate}
        </span></h3>
                    
                    {/* <div className="mb-3">
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                    </div> */}
                    <h6>
                     {ty.data}
                     </h6>
                    <div className="d-flex justify-content-center mb-2">
                      <Link to="/contact"
                        className="btn btn-sm btn-primary px-3 border-end"
                        style={{ borderRadius: "30px 0 0 30px" }}
                      >
                        Submit Query
                      </Link>
                     
 
  
    {/* <a className="btn btn-sm btn-primary px-3"  style={{ borderRadius: "0 30px 30px 0" }}href="#popup">
      I am a Popup
    </a>
    <a></a>
  </div>
  <a></a>
  <div className="popup" id="popup">
    <a></a>
    <div className="popup__content">
      <a>
        <h2 className="heading-secondary">Start booking now</h2>
        <h3 className="heading-tertiary">
          Have you logged In ?
        </h3>
 
      </a>
      <a href="#" className="button">
      Login
      </a>
    </div>                      */}
{userLoginStatus &&
                      <Link to={`/booking/${ty._id}`}
                        className="btn btn-sm btn-primary px-3"
                        style={{ borderRadius: "0 30px 30px 0" }}
                        data-toggle="modal" data-target="#myModal"
                      >
                        Book Now
                      </Link>}
                      {userLogStatus &&
                      <Link to="/aftersubmit"
                        className="btn btn-sm btn-primary px-3"
                        style={{ borderRadius: "0 30px 30px 0" }}
                        data-toggle="modal" data-target="#myModal"
                      >
                        Book Now
                      </Link>}
                    </div>
                  </div>
                </div>
              </div>
             
              )}
            </div>
          </div>
        </div>
        </div>
</div>
</div>


        </>
     );
}

export default GoaPackage;