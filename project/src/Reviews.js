import { Link } from "react-router-dom";
function Reviews() {
    return (
      <>
    
      <div className="rev">
      <div className="blog">
      <div className="container py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="row text-center text-white">
        <div className="col-lg-8 mx-auto">
        <h1 className="" style={{marginLeft:-300,marginRight:-300}}>Exclusive collection of travel blogs</h1>
        
         
        
        </div>
      </div>
    </div>
      <div className="container">
        <h3 className="highlight"></h3>
        <div className="blog-area">
          <div className="blog-box">
            <a href="">
              <figure>
                <img src="https://www.tourmyindia.com/blog/wp-content/uploads/2023/04/Top-Things-to-Do-in-Kutch-Gujarat.jpg" />
              </figure>{" "}
              <span>April 21,2023</span>
             <Link to="/guj"> <h3>
                Top 15 Things to Do &amp; Places to See on a Trip to Kutch in
                Gujarat
              </h3></Link>
            </a>
          </div>
          <div className="blog-box">
            <a href="">
              <figure>
                <img src="https://www.tourmyindia.com/blog/wp-content/uploads/2023/04/Best-Places-to-Visit-in-Northeast-India.jpg" />
              </figure>{" "}
              <span>April 18,2023</span>
              <Link to="/north">
              <h3>13 Best Places to Visit in North-East India in Summer Season</h3>
              </Link>
            </a>
          </div>
          <div className="blog-box">
            <a href="">
              <figure>
                <img src="https://www.tourmyindia.com/blog/wp-content/uploads/2023/04/Best-Less-Crowded-Hill-Stations-in-South-India.jpg" />
              </figure>{" "}
              <span>April 14,2023</span>
              <Link to="/south">
              <h3>Top 10 Less Crowded Hill Stations to Visit in South India</h3>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
</>
      );
}

export default Reviews;