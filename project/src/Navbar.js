import { useState } from "react";
import axios from "axios";
import Nav from "./nav";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  
  let userLoginStatus = true
  let userLogStatus = false
  console.log(localStorage.getItem("uinfo"))
  let udaya = JSON.parse(localStorage.getItem("uinfo"))
  if (localStorage.getItem("uinfo") === null) {
    userLoginStatus = false
    userLogStatus = true
    
  }

  let navigate = useNavigate()
  const searchPackage = () =>{
    navigate(`/goapackage/${userSearch.name}`)}
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
    return ( 
        <>
 
  <div className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <a href="" className="navbar-brand p-0">
      <Link to ="/home1">
        <h1 className="text-primary m-0" >
          <i className="fa fa-plane me-3"style={{ fontSize: 48}} />

          HIGH ON TRIPS
        </h1>
        </Link>
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
          {/* <Link to="/about" className="nav-item nav-link">
            About
          </Link> */}
          {/* <Link to="/services" className="nav-item nav-link">
           Destinations
          </Link> */}
          

          
          {/* <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
           Destinations
            </a>
            


            <div className="dropdown-menu w-800 mt-0" aria-labelledby="navbarDropdown"
            style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
              <div className="container-fluid">
  <div className="row my-4">
    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
      <div className="list-group list-group-flush">
      
      
        <Link to="/amrit" className="list-group-item list-group-item-action">
          Amritsar
        </Link>
        <Link to="/manali"  className="list-group-item list-group-item-action">
         Manali
        </Link>
        <a href="" className="list-group-item list-group-item-action">
         Kashmir
        </a>
        <a href="" className="list-group-item list-group-item-action">
         Ladakh
        </a>
     
    </div>
    </div>

    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
      <div className="list-group list-group-flush">
      
        <a href="" className="list-group-item list-group-item-action">
          Rishikesh
        </a>
        <a href="" className="list-group-item list-group-item-action">
          Kerala
        </a>
        <Link to="/munnar" className="list-group-item list-group-item-action">
         Munnar
        </Link>
        <a href="" className="list-group-item list-group-item-action">
        Dharamshala
        </a>
      
        
      </div>
    </div>
    <div className="col-md-6 col-lg-3 mb-3 mb-md-0">
      <div className="list-group list-group-flush">
       
        <a href="" className="list-group-item list-group-item-action">
          WildLife
        </a>
        <a href="" className="list-group-item list-group-item-action">
          Darjeeling
        </a>
       
        <a href="" className="list-group-item list-group-item-action">
          Meghalaya
        </a>
        <Link to="/sikkim" className="list-group-item list-group-item-action">
          Sikkim
        </Link>
      </div>
    </div>
    <div className="col-md-6 col-lg-3">
      <div className="list-group list-group-flush">
     
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
      
      </div>
    </div>

</div>

    </div>
     
            </div>
          </div> */}

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
              {/* <Link to ="/gallery" className="dropdown-item">
              Image Gallery
              </Link> */}
              <Link to="/event" className="dropdown-item">
               Events
              </Link>
             
              <Link to="/showrev" className="dropdown-item">
                Testimonial
              </Link>
           
            </div>
          </div>

          {/* <Link to="/contact"className="nav-item nav-link">Contact</Link> */}
          {/* <Link to="/login"className="nav-item nav-link">
        Login
        </Link>  */}
{userLoginStatus &&
                          <>
                            <Link to="/myaccount" className="nav-item nav-link" >
                              My Account
                            </Link>
                              <Link to="/logout" className="nav-item nav-link">
                              Logout
                           </Link>
</>
                          
                        }

                        {userLogStatus && <>
                           <Link to="/login" className="nav-item nav-link">
                           login
                         </Link>
                         <Link to="/register" className="nav-item nav-link">
                         Register
                       </Link>
                       </>
}

{/* {userLoginStatus &&
                          <li className="nav-item">
                            <Link to="/logout" className="nav-link" >
                              Logout
                            </Link>
                            <Link to="/myaccount" className="nav-link" >
                             My account
                            </Link>

                          </li>
                        }

                        {userLogStatus &&
                          <li className="nav-item">
                            <Link to="/login" className="nav-link" >
                              Login
                            </Link>
                            <Link to="/register" className="nav-link" >
                              Register
                            </Link>

                          </li>
                        } */}
        </div>
        {/* <Link to="/register" className="btn btn-primary rounded-pill py-2 px-4">
         Register
        </Link> 
         */}
        
        {/* <h2 className="text-primary m-0">    
          <Link to="/login"className="nav-item nav-link"><i className="fa fa-map-marker-alt " style={{color:"#2C3E50"}}/></Link>
         
        </h2> */}
      
      </div>
    </nav> 
    <div className="container-fluid bg-primary   hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Enjoy Your Vacation With Us
            </h1>
            <p className="fs-4 text-white mb-2 animated slideInDown">
              
            </p>
            <br/>
              <br/><br/>
            
            <div className="position-relative w-75  animated slideInDown" style={{marginRight:300,marginLeft:-170}}>
              {/* <input
                className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Eg: Thailand"
              /> */}
              <div className="position-relative  animated slideInDown" style={{width:500 , marginLeft:400 }}>
           <form action="" method="post" onSubmit={submitSearch} >   <input
                className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                type="text"style={{marginLeft:-25}}
                placeholder="Eg: Mumbai"
           
                name="name"
                onChange={handleinput}
                       value={userSearch.name}
              />
           
              <button
                type="submit"
                className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 "
                style={{ marginTop: 7,marginRight:34 }}
                onClick={searchPackage}
              >
                Search
              </button>
           
              </form>
               {/* <Link to="/booking" className="btn btn-primary rounded-pill py-2 px-4">
         Booking
        </Link> */}
           
            </div>
              <br/>
              <br/>
              {/* <Link to="/packages">
              <button
                type="button"
                className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 "
                style={{ marginTop: 7 }}
              >
                Explore Packages
              </button>
              </Link> */}
               {/* <Link to="/booking" className="btn btn-primary rounded-pill py-2 px-4">
         Booking
        </Link> */}
              <br/>
              <br/>
            </div>

          </div>
        </div>
      </div>
     
    </div>
    {/* <section className="nh-tp-list wow fadeInUp" data-wow-delay="0.1s" >
  <a
    href="https://www.tourtravelworld.com/packages/tour-package-for-sikkim-161429.html"
    title="Tour Package for Sikkim - Pelling,Gangtok,Lachen,"
    target="_blank"
    className="nh-tp-iteam ffp"
  
 
  >
    <div className="nh-tp-img">
      <img
        src="https://dynamic.tourtravelworld.com/package-images/photo-small/dir_18/534365/246610.jpg"
        width={300}
        height={196}
        alt="Tour Package for Sikkim"
      />
    </div>
    <div className="nh-tp-info">
      <p className="name sc" style={{  fontSize:18,  fontWeight:700, color:"black"}}>Tour Package for ..</p>
      <p className="days sc" >
        <i className="fa fa-clock-o" style={{    content: "\f017"}}/> 8 Days / 7 Nights
      </p>
      <p className="city sc" title="Pelling,Gangtok,Lachen,">
        Pelling,Gangtok,Lachen,
      </p>
      <p className="price">
        Starting at{" "}
        <span className="dif" style={{color:"red"}}>
          <i className="fa fa-inr" /> 55400/-
        </span>
      </p>
    </div>
  </a>
  <a
    href="https://www.tourtravelworld.com/packages/goa-tour-package-144919.html"
    title="Goa Tour Package - Goa City,"
    target="_blank"
    className="nh-tp-iteam ffp"
  >
    <div className="nh-tp-img">
      <img
        src="https://dynamic.tourtravelworld.com/package-images/photo-small/dir_18/528623/225764.jpg"
        width={300}
        height={196}
        alt="Goa Tour Package"
      />
    </div>
    <div className="nh-tp-info">
      <p className="name sc"style={{  fontSize:18,  fontWeight:700, color:"black"}}>Goa Tour Package</p>
      <p className="days sc" >
        <i className="fa fa-clock-o" /> 3 Days / 2 Nights
      </p>
      <p className="city sc" title="Goa City,">
        Goa City,
      </p>
      <p className="price">
        Starting at{" "}
        <span className="dif"style={{color:"red"}}>
          <i className="fa fa-inr" /> 7999/-
        </span>
      </p>
    </div>
  </a>
  <a
    href="https://www.tourtravelworld.com/packages/couple-standard-package1-14224.html"
    title="Couple Standard Package - Port Blair - Ross Island"
    target="_blank"
    className="nh-tp-iteam ffp"
  >
    <div className="nh-tp-img">
      <img
        src="https://dynamic.tourtravelworld.com/package-images/photo-small/dir_9/265931/20725.jpg"
        width={300}
        height={196}
        alt="Couple Standard Package"
      />
    </div>
    <div className="nh-tp-info">
      <p className="name sc"style={{  fontSize:18,  fontWeight:700, color:"black"}}>Couple Standard P..</p>
      <p className="days sc">
        <i className="fa fa-clock-o" /> 3 Days / 2 Nights
      </p>
      <p className="city sc" title="Port Blair - Ross Island">
        Port Blair - Ross Island
      </p>
      <p className="price">
        Starting at{" "}
        <span className="dif"style={{color:"red"}}>
          <i className="fa fa-inr" /> 3866/-
        </span>
      </p>
    </div>
  </a>
  <a
    href="https://www.tourtravelworld.com/packages/umrah-package-151389.html"
    title="Umrah Package - Hyderabad,Jeddah,Mecca,"
    target="_blank"
    className="nh-tp-iteam ffp"
  >
    <div className="nh-tp-img">
      <img
        src="https://dynamic.tourtravelworld.com/package-images/photo-small/dir_18/519111/233469.jpg"
        width={300}
        height={196}
        alt="Umrah Package"
      />
    </div>
    <div className="nh-tp-info">
      <p className="name sc"style={{  fontSize:18,  fontWeight:700, color:"black"}}>Umrah Package</p>
      <p className="days sc">
        <i className="fa fa-clock-o" /> 14 Days / 13 Nights
      </p>
      <p className="city sc" title="Hyderabad,Jeddah,Mecca,">
        Hyderabad,Jeddah,Mecca,
      </p>
      <p className="price">
        Starting at <span className="dif"style={{color:"red"}}>   <i className="fa fa-inr" /> 7800</span>
      </p>
    </div>
  </a>{" "}
</section> */}
  </div>
  
 
</>

    );
}
export default Navbar;