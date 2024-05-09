import { Link } from "react-router-dom";
function Services1() {
    return (
        <>
  {/* Navbar & Hero Start */}
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
        <Link to="goa" className="list-group-item list-group-item-action ">
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
              <a href="destination.html" className="dropdown-item">
                Volunteering
              </a>
              <a href="destination.html" className="dropdown-item">
                Rent A Vehical
              </a>
              <a href="booking.html" className="dropdown-item">
               Events
              </a>
             
              <a href="testimonial.html" className="dropdown-item">
                Reviews
              </a>
              <a href="404.html" className="dropdown-item">
               Blogs
              </a>
            </div>
          </div>

          <Link to="/contact"className="nav-item nav-link">Contact</Link>
        </div>
        <Link to="/register" className="btn btn-primary rounded-pill py-2 px-4">
         Register
        </Link> 
        <h2 className="text-primary m-0">
          <Link to="/login"className="nav-item nav-link"><i className="fa fa-map-marker-alt " style={{color:"#2C3E50"}}/></Link>
         
        </h2>
      </div>
    </nav>  <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-3 text-white animated slideInDown">
              Services
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Services
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
  {/* Service Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Services
        </h6>
        <h1 className="mb-5">Our Services</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-globe text-primary mb-4" />
              <h5>All India tours</h5>
              <p>
             From the majestic Himalayas in the North to the backwaters of Kerala in the South, We offers a plethora of experiences that are sure to leave a lasting impression on your mind.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-hotel text-primary mb-4" />
              <h5> Handpicked Hotels</h5>
              <p>
              A unique collection of luxury country hotels that allow you to escape the everyday and explore India at its best.we are here to create an unforgettable experience for you.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-user text-primary mb-4" />
              <h5>  Best Food</h5>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-cog text-primary mb-4" />
              <h5> Affordable Trips</h5>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-globe text-primary mb-4" />
              <h5>Fun Activities</h5>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-hotel text-primary mb-4" />
              <h5> 24/7 Service</h5>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-user text-primary mb-4" />
              <h5>Travel Guides</h5>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-cog text-primary mb-4" />
              <h5>Event Management</h5>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
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
        <h6 className="section-title bg-white text-center text-primary px-3">
          Testimonial
        </h6>
        <h1 className="mb-5">Our Clients Say!!!</h1>
      </div>
      <div className="owl-carousel testimonial-carousel position-relative">
        <div className="testimonial-item bg-white text-center border p-4">
          <img
            className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
            src="img/testimonial-1.jpg"
            style={{ width: 80, height: 80 }}
          />
          <h5 className="mb-0">John Doe</h5>
          <p>New York, USA</p>
          <p className="mb-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
        </div>
        <div className="testimonial-item bg-white text-center border p-4">
          <img
            className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
            src="img/testimonial-2.jpg"
            style={{ width: 80, height: 80 }}
          />
          <h5 className="mb-0">John Doe</h5>
          <p>New York, USA</p>
          <p className="mt-2 mb-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
        </div>
        <div className="testimonial-item bg-white text-center border p-4">
          <img
            className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
            src="img/testimonial-3.jpg"
            style={{ width: 80, height: 80 }}
          />
          <h5 className="mb-0">John Doe</h5>
          <p>New York, USA</p>
          <p className="mt-2 mb-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
        </div>
        <div className="testimonial-item bg-white text-center border p-4">
          <img
            className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
            src="img/testimonial-4.jpg"
            style={{ width: 80, height: 80 }}
          />
          <h5 className="mb-0">John Doe</h5>
          <p>New York, USA</p>
          <p className="mt-2 mb-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
        </div>
      </div>
    </div>
  </div>
</>

      );
}

export default Services1;