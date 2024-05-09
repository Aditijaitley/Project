import Nav from "../nav";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function Job () {
  const navigate = useNavigate();
const [userJob,setuserJob]=useState({
name:"",
email:"",
phone:"",
address:"",
loc1:"",
loc2:"",
experience:"",
})
const handleinput=(e)=>
{
  const name=e.target.name;
  const value=e.target.value;
  setuserJob({...userJob,[name]:value});
}
const submitJob=(e)=>
  {
    e.preventDefault()
  console.log()
  
    axios.post("http://localhost:5050/Job",{userJob}).then((response)=>
  {
    console.log(response.status,response.data.token );
  }
  );
  navigate("/call")
  }
    return ( 
        <>
 <Nav/>
<br/>
<br/><br/>

<div className="joo">
  {/* <div id="survey-container">
    <h1 id="title">Job form</h1>
    <p id="description">Fill in to apply</p>
    <form id="survey-form" method="post" onSubmit={submitJob} action="">
 
      <label id="name-label" className="row-label" htmlFor="name">
        Name:
      </label>
      <input
        name="name"
        className="row-input"
        type="text"
        placeholder="Enter your name"
     
        onChange={handleinput}
                        value={userJob.name}
      />
    
      <label id="email-label" className="row-label" htmlFor="email">
        Email:
      </label>
      <input
        name="email"
        className="row-input"
        type="email"
        placeholder="Enter your email"
        onChange={handleinput}
                        value={userJob.email}      />
      <label id="phone-label" className="row-label" htmlFor="phone">
        Phone no:
      </label>
      <input
        name="phone"
        className="row-input"
        type="tel"
        placeholder="Enter your Phone no."
        onChange={handleinput}
        value={userJob.phone} 
      />
      <label id="address" className="row-label" htmlFor="addres">
        Address:
      </label>
      <input
        name="address"
        className="row-input"
        type="address"
        placeholder="Enter your address"
        onChange={handleinput}
        value={userJob.address} 
      />
     
      <label className="row-label" htmlFor="dropdown">
        1st Preffered Location:
      </label>
      <select id="dropdown" className="row-input" name="loc1" required=""onChange={handleinput}>
        <option disabled="" selected="">
          Select an option
        </option>
        <option value="Mumbai">Mumbai</option>
        <option value="secondary">Pune</option>
        <option value="higher">Kashmir</option>
        <option value="na">Delhi</option>
      </select>
      <label className="row-label" htmlFor="dropdown">
        2nd Preffered Location:
      </label>
      <select id="dropdown" className="row-input" required=""name="loc2" onChange={handleinput}>
        <option disabled="" selected="">
          Select an option
        </option>
        <option value="primary">Mumbai</option>
        <option value="secondary">Pune</option>
        <option value="higher">Kashmir</option>
        <option value="na">Delhi</option>
      </select>
      <label className="row-label" htmlFor="dropdown">
        3rd Preffered Location:
      </label>
      <select id="dropdown" className="row-input" required="" name="loc3" onChange={handleinput}>
        <option disabled="" selected="">
          Select an option
        </option>
        <option value="primary">Mumbai</option>
        <option value="secondary">Pune</option>
        <option value="higher">Kashmir</option>
        <option value="na">Delhi</option>
      </select>

      <label id="number-label" className="row-label" htmlFor="number">
        Years of experience:
      </label>
      <input
        name="experience"
        className="row-input"
        type="number"
        placeholder="Enter number of years of experience"
        min={0}
        max={50}
        onChange={handleinput}
        value={userJob.experience}/>
    
    
      <p className="row-label">Expected salary:</p>
      <label className="row-input small" htmlFor="below-3k">
        <input
          type="radio"
          id="below-3k"
          name="salary"
          defaultValue="below-3k"
          value="below-3k" checked={userJob.salary==="below-3k"} onClick={handleinput} 
        />
        <span className="inline-label">Below $3K</span>
      </label>
      <label className="row-input small" htmlFor="3k-4k">
        <input type="radio" id="3k-4k" name="salary"
          defaultValue="3k-4k"
          value="3k-4k" checked={userJob.salary==="3k-4k"} onClick={handleinput}  />
        <span className="inline-label">$3K - $4K</span>
      </label>
      <label className="row-input small" htmlFor="4k-5k">
        <input type="radio" id="4k-5k" name="salary" defaultValue="4k-5k"  value="4k-5k" checked={userJob.salary==="4k-5k"} onClick={handleinput} />
        <span className="inline-label">$4K - $5K</span>
      </label>
      <label className="row-input small" htmlFor="above-5k">
        <input
          type="radio"
          id="above-5k"
          name="salary"
          defaultValue="above-5k" value="above-5k" checked={userJob.salary==="above-5k"} onClick={handleinput}
        />
        <span className="inline-label">Above $5K</span>
      </label>
      <label className="row-input small" htmlFor="dont-know">
        <input
          type="radio"
          id="dont-know"
          name="salary"
          defaultValue="dont know"
          value="dont know" checked={userJob.salary==="dont know"} onClick={handleinput}
        />
        <span className="inline-label">Don't know</span>
      </label>

      <label id="cv-label" className="row-label" htmlFor="cv">
        Upload Certificates:
      </label>
      <input
        id="cv"
        className="row-input"
        type="file"
        placeholder="Add CV"
        required=""
      />

      <label className="row-label" htmlFor="comments">
        Additional informations:
      </label>
      <textarea
        id="comments"
        placeholder="Enter other informations here..."
        defaultValue={""}
      />
    
      <input type="submit"
        name="Job" id="Job" defaultValue="Job"
      />
    </form>
  </div> */}

<div className="background">

  <form className="app__form"style={{marginTop:30,marginBottom:47}} action="" onSubmit={submitJob}>
    <header>
      <h1 className="app__heading">Apply Online</h1>
    </header>
    <label htmlFor="full_name" className="app__label">
      Full Name
    </label>
    <input
      type="text"
      name="name"
      className="app_input-text"
      required=""
      onChange={handleinput}
                        value={userJob.name}
    />
    <label htmlFor="phone_number" className="app__label">
      Phone Number
    </label>
    <input
      type="tel"
      pattern="^\d{11,13}$"
      name="phone"
      title="(Numbers only, inc. area code)"
      className="app_input-text"
      required=""
      onChange={handleinput}
                        value={userJob.phone}
    />
    <label htmlFor="Email" className="app__label">
      Email
    </label>
    <input type="email" name="email" className="app_input-text" required="" onChange={handleinput}
                        value={userJob.email}/>
                         <label htmlFor="address" className="app__label">
      Full Address
    </label>
    <input type="text" name="address" className="app_input-text" required="" onChange={handleinput}
                        value={userJob.address}/>
                        <div className="row">
                          <div className="col-xl-4">
                          <label className="row-label" htmlFor="dropdown">
        Choose Location:
      </label>
      <select id="dropdown" className="row-input" name="loc1" required=""onChange={handleinput}>
        <option disabled="" selected="">
          Select an option
        </option>
        <option value="Mumbai">Mumbai</option>
        <option value="Manali">Manali</option>
        <option value="Kashmir">Kashmir</option>
        <option value="Ladakh">Ladakh</option>
        <option value="Amritsar">Amritsar</option>
        <option value="Goa">Goa</option>
        <option value="Sikkim">Sikkim</option>
        <option value="Munnar">Munnar</option>
      </select></div>
                          <div className="col-xl-4">
                          <label id="number-label" className="row-label" htmlFor="number">
       Experience(yrs):
      </label>
      <input
        name="experience"
        className="row-input"
        type="number"
        placeholder="Enter number of years of experience"
        min={0}
        max={50} style={{width:140 , height:26}}
        onChange={handleinput}
        value={userJob.experience}/>
  </div>
  <div className="col-xl-4">
  <label className="row-label" htmlFor="dropdown">
       Expected Salary:
      </label>
      <select id="dropdown" className="row-input" name="loc2" required=""onChange={handleinput} style={{width:130}}>
        <option disabled="" selected="">
          Select an option
        </option>
        <option value="below-10k">below-10k</option>
        <option value="10k-20k">10k-20k</option>
        <option value="above-20k">above-20k</option>
        <option value="don'tknow">don'tknow</option>
      </select>
  </div>
                        </div>
    {/* <label htmlFor="message" className="app__label">
      Message<sup>(Optional)</sup>
    </label>
    <textarea
      name="full_name"
      className="app_input-textarea"
      defaultValue={" "}
    /> */}
    {/* <div className="app__base64__fields is-hidden">
      <textarea
        name="full_name"
        className="js-cover-letter__textarea"
        defaultValue={" "}
      />
      <textarea
        name="full_name"
        className="js-cv__textarea"
        defaultValue={" "}
      />
    </div> */}
    <br/>
    <input type="submit" name="Submit" value="Submit" className="app__submit"/>
  </form>
</div>

  </div>




</>

     );
}

export default Job;