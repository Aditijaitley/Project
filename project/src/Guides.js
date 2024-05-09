import { Link } from "react-router-dom";
function Guides() {
    return ( 
        <>

  <div className="container py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="row text-center text-white">
      <div className="col-lg-8 mx-auto">
      <h1 className="mb-5" style={{marginLeft:100,marginRight:100}}>Learn From The Gurus</h1>
      
       
      
      </div>
    </div>
  </div>
  {/* End */}
  <div className="container">
    <div className="row text-center">
      {/* Team item */}
      <div className="col-xl-4 col-sm-6 mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="bg-white rounded shadow-sm py-5 px-4">
        <Link to="/guidesdet" >     <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfSuGql_YXJ6Z_ZNFuEyfs_Gu2wQcBw1wbU1zXc80ryOPzE6tGnDxw4CSRfmkipUGAbn4&usqp=CAU"
            alt=""
            width={200}
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          /></Link>
      <Link to="/guidesdet" >   <h5 className="mb-0">Isha Chaudhary</h5></Link>
          <span className="small text-uppercase text-muted">There is almost no adventure activity that Isha hasn't pursued. Certainly, one would have to search hard to find another chap with a similar enthusiasm for adventure ... </span>
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
      {/* End */}
      {/* Team item */}
      <div className="col-xl-4 col-sm-6 mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="bg-white rounded shadow-sm py-5 px-4">
        <Link to="/guidesdet1" >       <img
            src="https://media.licdn.com/dms/image/C4D03AQG4R9TInbnC4A/profile-displayphoto-shrink_800_800/0/1663571724699?e=2147483647&v=beta&t=5rbWliP6Bby1A5nKQlY8hNgI8QYyVIqJP8vlxxtDCRQ"
            alt=""
            width={200}
           
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          /></Link>
       <Link to="/guidesdet1" >     <h5 className="mb-0">Shivangam</h5></Link>
          <span className="small text-uppercase text-muted">Shivangam was a student in Class-VII when he first went hiking. He fell in love with the high altitudes, and has since then been treading the heights in and around stunning Uttarkashi  (Garhwal). ...</span>
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
      {/* End */}
      {/* Team item */}
      <div className="col-xl-4 col-sm-6 mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="bg-white rounded shadow-sm py-5 px-4">
        <Link to="/guidesdet2" >        <img
            src="https://media.licdn.com/dms/image/C4D03AQG-A2xTMCHOuA/profile-displayphoto-shrink_800_800/0/1657853636987?e=2147483647&v=beta&t=pll6y7gJ3qOFgAunghRx9TZk1t-WH4xcyEhtnciQZHo"
            alt=""
            width={200}
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          /></Link>
       <Link to="/guidesdet2" >     <h5 className="mb-0">Aditi Jaitley</h5></Link>
          <span className="small text-uppercase text-muted">Having a father who's the epitome of the adventure traveller can only have had a positive influence on Aditi Jaitley. She has taken to 
           she undertook, aged only 17, across Greenland. ...</span>
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
      {/* End */}
      {/* Team item */}
      
      
      {/* End */}
    </div>
  </div>
</>

     );
}

export default Guides;