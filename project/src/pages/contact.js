import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Nav from "../nav";
function Contact1 () {
  const navigate = useNavigate();
  const [usercontact,setusercontact]=useState({
  name:"",
  lname:"",
  email:"",
  msg:"",
 })
  const handleinput=(e)=>
  {
    const name=e.target.name;
    const value=e.target.value;
    setusercontact({...usercontact,[name]:value});
  }
  const submitcontact=(e)=>
    {
      e.preventDefault()
    console.log()
    
      axios.post("http://localhost:5050/Contact",{usercontact}).then((response)=>
    {
      console.log(response.status,response.data.token );
    }
    );
    navigate("/call2")
    }
    return ( 
        
 <>
   <Nav/>
  {/* Navbar & Hero End */}
  {/* Contact Start */}<br/>
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
       
        <h1 className="mb-5"  style={{marginLeft:3}}>Contact For Any Query</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <h5>Get In Touch</h5>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos
          </p>
          <div className="d-flex align-items-center mb-4">
            <div
              className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
              style={{ width: 50, height: 50 ,color:"#dd91f0"}}
            >
            
              <i className="fa fa-map-marker-alt text-white"  style={{color:"#dd91f0"}}/>
            </div>
            <div className="ms-3">
              <h5 className="text-primary">Office</h5>
              <p className="mb-0">Chandigarh , Sector 21 c</p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4">
            <div
              className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
              style={{ width: 50, height: 50 }}
            >
              <i className="fa fa-phone-alt text-white" />
            </div>
            <div className="ms-3">
              <h5 className="text-primary">Mobile</h5>
              <p className="mb-0">9653468459</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div
              className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
              style={{ width: 50, height: 50 }}
            >
              <i className="fa fa-envelope-open text-white" />
            </div>
            <div className="ms-3">
              <h5 className="text-primary">Email</h5>
              <p className="mb-0">itzaditisharma@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
       
          <iframe
            className="position-relative rounded w-100 h-100"
            src="https://maps.google.com/maps?width=660&amp;height=400&amp;hl=en&amp;q=chandigarh&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            <a href="https://capcuttemplate.org/"
            frameBorder={0}
            style={{ minHeight: 250, border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
          <form className="app__form"style={{marginTop:30,marginBottom:30}} action="" onSubmit={submitcontact}>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="First Name"
                    onChange={handleinput}
                    value={usercontact.name}
                  />
                  <label htmlFor="name">First Name</label>
                </div>
              </div>
              <div className="col-md-6">
              <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    name="lname"
                    placeholder="First Name"
                    onChange={handleinput}
                    value={usercontact.lname}
                  />
                  <label htmlFor="name">Last Name</label>
                </div>
              </div>
              <div className="col-12">
              <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleinput}
                    value={usercontact.email}
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="text"
                    className="form-control"
                    placeholder="Leave a message here"
                    id="msg"
                    style={{ height: 100 }}
                    defaultValue={""}
                    name="msg"
                    onChange={handleinput}
                    value={usercontact.msg}
                  />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
</>


     );
}

export default Contact1;