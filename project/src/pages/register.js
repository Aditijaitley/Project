import Navbar from "../Navbar"
import Nav from "../nav";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
function  Register() {
const [userReg,setuserReg]=useState({
  username:"",
  email:"",
  password:"",
  phone:"",
  city:"",
  state:""
})
const handleinput=(e)=>
{
  const name=e.target.name;
  const value=e.target.value;
  setuserReg({...userReg,[name]:value});

}
const submitReg=(e)=>
{
  e.preventDefault()
  axios.post("http://localhost:5050/register",{userReg}).then((response)=>
  {
    console.log(response.status,response.data.token );
  }
  );
}
    return ( 
        <>
        <Nav/>
        <br/>
        <br/>
        <br/>
        <br/>
       
        <section className="" style={{ backgroundColor: "#fff" }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="">
        <div className="card text-black" style={{ borderRadius: 25 }}>
          <div className="card-body "style={{ height:700 }}>
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-1 mx-1 mx-md-4 mt-1">
                  Sign up
                </p>
                <form action="" method="post" onSubmit={submitReg} className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center ">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                        id="username"
                        onChange={handleinput}
                        value={userReg.username}
                        name="username"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="username">
                        Your Name
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center ">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleinput}
                        value={userReg.email}
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="email">
                        Your Email
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center ">
                    <i className="fa fa-phone fa-lg me-2 fa-fw" style={{fontSize:26,marginLeft:-1}}/>
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        onChange={handleinput}
                        value={userReg.phone}
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="email">
                        Your Phone
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center ">
                    <i className="fa fa-map-marker fa-lg me-3 fa-fw"style={{fontSize:26,marginLeft:-8}} />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        onChange={handleinput}
                        value={userReg.city}
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="email">
                        City
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center ">
                    <i className="fa fa-map-marker fa-lg me-3 fa-fw"style={{fontSize:26 , marginLeft:-8}} />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                        id="state"
                        name="state"
                        onChange={handleinput}
                        value={userReg.state}
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="email">
                         State
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center ">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleinput}
                        value={userReg.password}
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                    </div>
                  </div>
                
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3c"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in{" "}
                      <a href="#!">Terms of service</a>
                    </label>
                   
                  </div>
                  
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <div className="col-sm-6">
                   <Link to="/login" className="float-end text-primary"style={{marginLeft:-100}}>
                      Already have an account?
                    </Link>
                  </div>
                  <input type="submit" name="Register" id="Register" className="btn btn-primary rounded-pill py-2 px-4"
                  defaultValue="Register" style={{marginLeft:100,marginRight:-100}}/> 
                {/* <Link to="/register" className="btn btn-primary rounded-pill py-2 px-4">
         
         </Link>  */}
        <h2 className="text-primary m-0">
          <Link to="/login"className="nav-item nav-link"></Link>
         
        </h2>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="img/login-HP.jpg"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<br/>
</>
     );
}

export default  Register;