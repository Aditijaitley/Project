import { Link } from "react-router-dom";
function Footer() {
    return ( 
        <>
  
  <div
    className="container-fluid bg-dark text-light footer pt-5  wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h4 className="text-white mb-3">Company</h4>
          <Link to="/about"className="btn btn-link" >
            About Us
          </Link>
          <Link to="/contact" className="btn btn-link" >
            Contact Us
          </Link>
          <Link to="/blogs" className="btn btn-link">
            Blogs
          </Link>
          <Link to="/showrev" className="btn btn-link" >
            Reviews
          </Link>
          {/* <a className="btn btn-link" href="">
            FAQs &amp; Help
          </a> */}
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-white mb-3">Contact</h4>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3" />
            Chandigarh , Sector 21 c
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />
            +9653468359
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            itzaditisharma@gmail.com
          </p>
          <p className="mb-2">
            <i className="fab fa-linkedin-in"  style={{marginRight:20}}/>
            <i className="fab fa-twitter" style={{marginRight:20}}/> <i className="fab fa-facebook-f"style={{marginRight:20}} /> <i className="fab fa-youtube" />
          </p>
          {/* <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-youtube" />
            </a>
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-linkedin-in" />
            </a>
          </div> */}
        </div>
        <div className="col-lg-3 col-md-6">
          <Link to="/gallery">
          <h4 className="text-white mb-3">Gallery</h4></Link>
          <div className="row g-2 pt-2">
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="img/package-1.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="img/package-2.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="img/package-3.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="img/package-2.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="img/package-3.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="img/package-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-white mb-3">Plan a Trip</h4>
          <p>Register now to book exciting and affordable package</p>
          <div className="position-relative mx-auto" style={{ maxWidth: 400 ,marginRight:90}}>
          <Link to="/register">
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2" style={{marginLeft:900}}
            >
              SignUp
            </button></Link>
          </div>
        </div>
      </div>
    </div>
   
  </div>

</>

     );
}

export default Footer;
 