import Nav from "./nav";
import React,{useState,useEffect} from "react"
import Axios from 'axios'
import { Link } from "react-router-dom";
function Forgot() {
  const [emailStatus, setemailStatus] = useState("");
  const [frommail,setfrommail]=useState("")
const [password,setpassword]=useState(0)
const [tomail,settomail]=useState("")

useEffect(()=>{
  Axios.get("http://localhost:5050/read").then((response)=>{
    console.log(response.data)
  })
},[])


const sendmail=(e)=>{
  e.preventDefault()
  Axios.post("http://localhost:5050/mail",{tomail:tomail}).then((response)=>{
    console.log(response.data)
    setemailStatus(response.data.message)
  
 
  // console.log(response.data)
    // if (response.data.msg === 'success'){
    //     alert("Email sent, awesome!"); 
   
    // }else if(response.data.msg === 'fail'){
    //     alert("Oops, something went wrong. Try again")
    // }
})

}
    return ( 
        <>
  <Nav/>
      <br/>
      <br/>
      <div className="container-fluid">
        <div className="login-page bg-light">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
       
        <div className="bg-white shadow rounded">
          <div className="row">
            <div className="col-md-7 pe-0">
              <div className="form-left h-100 py-5 px-5">
              <div className="text-center">
              <h3>
                <i className="fa fa-lock fa-4x" />
              </h3>
              <h2 className="text-center">Forgot Password?</h2>
              <p>You can reset your password here.</p>
              <p>{emailStatus}</p>
              <div className="panel-body">
                <form onSubmit={sendmail}
                  id="register-form"
                  role="form"
                  autoComplete="off"
                  className="form"
                  method="post"
                > 
                {/* <label>From</label>
                  <input type="text" onChange={(e)=>{setfrommail(e.target.value)}}/>
      <label>From Mail Password</label>
      <input type="text" onChange={(e)=>{setpassword(e.target.value)}}/>
      <label>To address</label> */}
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-envelope color-blue" />
                      </span>
                      <input
                        id="email"
                        name="email"
                        placeholder="email address"
                        className="form-control"
                        type="email"
                        onChange={(e)=>{settomail(e.target.value)}}
                      />
                    </div>
                  </div>
                  <br/>
                
                  <div className="form-group">
                    <input
                      name="recover-submit"
                      className="btn btn-lg btn-primary btn-block"
                      defaultValue="Reset Password"
                      type="submit"
                      
                    />
                   
                  </div>
                  <input
                    type="hidden"
                    className="hide"
                    name="token"
                    id="token"
                    defaultValue=""
                  />
                </form>
              </div>
            </div>
                {/* <form action="" className="row g-4">
                  <div className="col-12">
                    <label>
                      Username<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <div className="input-group-text">
                        <i className="bi bi-person-fill" />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Username"
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
                        type="text"
                        className="form-control"
                        placeholder="Enter Password"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineFormCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineFormCheck"
                      >
                        Remember me
                      </label>
                    </div>
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
                </form> */}
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
</div>
</>

     );
}

export default Forgot;

