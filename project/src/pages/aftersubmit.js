import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../nav";
function AfterSubmit() {
  const[userPay,setPay]=useState({
  
  })
  const handleinput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setPay({...userPay,[name]:value});
  }
  //  const submitcReg=(e)=>{
  //    e.preventDefault()
  //    axios.post("http://localhost:5050/create-checkout-session",{userPay}).then((response)=>{
  //    console.log(response.status,response.data.token);
  //    });
  //  }
    return ( 
    <> 
    <Nav/>
       <div className="me">
      <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12">
          <div className="card mx-auto" style={{background:"none"}}>
          <form className="card-details  " action="http://localhost:5050/create-checkout-session" method="POST" >
            <h1 align="center" style={{marginLeft:50}}>Login First</h1>
            {/* <input name="amount" value="300"onClick={handleinput} style={{width:60,marginLeft:180}} readOnly/> */}
            
         
             
              
                <div className="row d-flex">
                 
                
                  <div className="col-sm-5 " style={{marginLeft:110 , }}>
                    {/* <Link to="/paymentsuccess"> */}
                    {/* <div    className="fas fa-arrow-right"> */}
                    <Link to="/login">
                    <input type="submit" name="submit" value="Login" className="btn btn-primary" style={{width:80,height:40,Color:"green"}}/>
                    </Link>
                 
                
                  </div>
                </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
     );
}

export default AfterSubmit;