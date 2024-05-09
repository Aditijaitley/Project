import Footer from "../Footer";
import Topbar from "../Topbar";
import Nav from "../nav";
import axios from "axios";
import { useState ,useEffect } from "react";
import { Link ,useNavigate } from "react-router-dom";
function Login() {

const [email, setemail] = useState("");
const [pass, setpass] = useState("");
const [loginError, setLoginError] = useState("");
let navigate= useNavigate()

const loginUser=(e)=>{
  e.preventDefault()
  let userdata = {
    email: email,
    pass: pass    
  }
  axios.post("http://localhost:5050/loginuser",userdata).then((response)=>
  {
    if(response.data.length>0){
      localStorage.setItem("uinfo", JSON.stringify(response.data))
      console.log(response.data);
      navigate("/home1")
    }
    else
    {
      setLoginError("Login details are not correct!")
    }
  });
  
}
    return ( <>
      
        <Nav/>
      <br/>
      <br/>
        <div className="login-page bg-light">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
       
        <div className="bg-white shadow rounded">
          <div className="row">
            <div className="col-md-7 pe-0">
              <div className="form-left h-100 py-5 px-5">
                <p>{loginError}</p>
                <form action="#!" className="row g-4" onSubmit={loginUser} method="post">
                  <div className="col-12">
                    <label>
                      Username<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <div className="input-group-text">
                        <i className="bi bi-person-fill" />
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Username"
                        name="email"
                        id="email"
                        onChange={(e)=>setemail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label>
                      Password<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <div className="input-group-text">
                        <i className="bi bi-lock-fill" />
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        name="password"
                        id="password"
                        onChange={(e)=>setpass(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                  
                  
                     <Link to="/register"  >
                      Add new account
                    </Link>
                 
                  </div>
                  <div className="col-sm-6">
                   <Link to="/forgot" className="float-end text-primary">
                      Forgot Password?
                    </Link>
                  </div>
                 
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary px-4 float-end mt-4"
                    >
                      login
                    </button>
                  </div>
                </form>
              </div>
            </div>
           
            <div className="col-md-5 ps-0 d-none d-md-block">
          
              <div className="form-right    text-center ">
                {/* <i className="bi bi-bootstrap" /> */}
                <div className="cd">
               
              </div>
              </div>
            </div>
          </div>
        </div>
       
      
      </div>
    </div>
  </div>
</div>



      </>
       );
}

export default Login;