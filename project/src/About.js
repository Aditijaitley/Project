import { Link } from "react-router-dom";
import Guides from "./Guides";
function About() {
    return ( <>
        {/* About Start */}
      
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
      <p className="name sc">Tour Package for ..</p>
      <p className="days sc">
        <i className="fa fa-clock-o" /> 8 Days / 7 Nights
      </p>
      <p className="city sc" title="Pelling,Gangtok,Lachen,">
        Pelling,Gangtok,Lachen,
      </p>
      <p className="price">
        Starting at{" "}
        <span className="dif">
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
      <p className="name sc">Goa Tour Package</p>
      <p className="days sc">
        <i className="fa fa-clock-o" /> 3 Days / 2 Nights
      </p>
      <p className="city sc" title="Goa City,">
        Goa City,
      </p>
      <p className="price">
        Starting at{" "}
        <span className="dif">
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
      <p className="name sc">Couple Standard P..</p>
      <p className="days sc">
        <i className="fa fa-clock-o" /> 3 Days / 2 Nights
      </p>
      <p className="city sc" title="Port Blair - Ross Island">
        Port Blair - Ross Island
      </p>
      <p className="price">
        Starting at{" "}
        <span className="dif">
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
      <p className="name sc">Umrah Package</p>
      <p className="days sc">
        <i className="fa fa-clock-o" /> 14 Days / 13 Nights
      </p>
      <p className="city sc" title="Hyderabad,Jeddah,Mecca,">
        Hyderabad,Jeddah,Mecca,
      </p>
      <p className="price">
        Starting at <span className="dif"> On Request</span>
      </p>
    </div>
  </a>{" "}
</section> */}

      
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ minHeight: 400 }}
              >
                <div className="position-relative h-100">
                  {/* <img
                    className="img-fluid position-absolute w-100 h-100"
                    src="img/pic1.webp"
                    alt=""
                    style={{ objectFit: "cover" }}
                  /> */}
                <video className="img-fluid position-absolute w-100 h-100" style={{ objectFit: "cover" }} width={320} height={240} controls="true" autoPlay="true" loop="true">
  <source src="video/video.mp4" type="video/mp4" />
 

  
</video>
{/* <div className="container">
     
      <div className="row g-3">
        <div className="col-lg-7 col-md-6">
          <div className="row g-3">
            <div
              className="col-lg-12 col-md-12 wow zoomIn"
              data-wow-delay="0.1s"
            >
              <a className="position-relative d-block overflow-hidden" href="" >
                <img className="img-fluid" src="img/ladakh.jpg" alt="" />
                
                
              </a>
            </div>
            <div
              className="col-lg-6 col-md-12 wow zoomIn"
              data-wow-delay="0.3s"
            >
              <a className="position-relative d-block overflow-hidden" href="">
                <img className="img-fluid" src="img/kashmir.jpg" alt="" />
              
              </a>
            </div>
            <div
              className="col-lg-6 col-md-12 wow zoomIn"
              data-wow-delay="0.5s"
            >
              <a className="position-relative d-block overflow-hidden" href="">
                <img className="img-fluid " src="img/jaipur.jpg" alt="" />
               
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-5 col-md-6 wow zoomIn"
          data-wow-delay="0.7s"
          style={{ minHeight: 350 }}
        >
          <a
            className="position-relative d-block h-100 overflow-hidden"
            href=""
          >
            <img
              className="img-fluid position-absolute w-100 h-100"
              src="img/goa.jpg"
              alt=""
              style={{ objectFit: "cover" }}
            />

          </a>
        </div>
        
        
      </div>
    </div> */}

                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                {/* <h6 className="section-title bg-white text-start text-primary pe-3">
                About Us
                </h6> */}
                <h1 className="mb-4">
                We are passionate about <span className="text-primary"> TRAVEL</span>
                </h1>
                <p className="mb-4">
                “Our goal is to bring you the experiences you want and the personalized service you deserve. We make it easy to have a great vacation.”
                
                </p>
                <p className="mb-4">
                Discover and book excursions, tours, and attractions in destinations around the world with Project Expedition. Choose from thousands of things to do with competitive prices and superior customer service.
                </p>
                <div className="row gy-2 gx-4 mb-4">
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                      All India tours
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                      Handpicked Hotels
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                      Best Food
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                      Affordable Trips
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                     Tours & Activities
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                      24/7 Service
                    </p>
                  </div>
                </div>
                <Link to="/about" className="btn btn-primary py-3 px-5 mt-2" >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      
        {/* About End */}
      </>
       );
}

export default About;