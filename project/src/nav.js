
import { Link } from "react-router-dom";
function Nav() {

  let userLoginStatus = true
  let userLogStatus = false
  console.log(localStorage.getItem("uinfo"))
  let udaya = JSON.parse(localStorage.getItem("uinfo"))
  if (localStorage.getItem("uinfo") === null) {
    userLoginStatus = false
    userLogStatus = true
    
  }

    return (   <div className="container-fluid position-relative p-0">

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
          {/* <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
           Destinations
            </a>
            


            <div className="dropdown-menu w-800 mt-0" aria-labelledby="navbarDropdown"
            style={{width:500 }}>
              <div className="container-fluid">
  <div className="row my-4">
    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
      <div className="list-group list-group-flush">
      
      
        <Link to="/amrit" className="list-group-item list-group-item-action">
          Amritsar
        </Link>
        <a href="" className="list-group-item list-group-item-action">
         Manali
        </a>
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
          {/* <Link to="/about" className="nav-item nav-link">
            About
          </Link> */}
          {/* <Link to="/services" className="nav-item nav-link">
           Destinations
          </Link> */}
          

          
         

        

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
    </div> );
}

export default Nav;