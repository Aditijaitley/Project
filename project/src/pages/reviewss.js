import { useState ,useEffect} from "react";
import axios from "axios";
import { Link ,useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import Nav from "../nav";


function Reviews1() {
  let uinfo = JSON.parse(localStorage.getItem("uinfo"))
  console.log(uinfo)
  const navigate = useNavigate();
  const [review, setreview] = useState({
    // rid:"",
    name: "",
    email: "",
    subject: "",
    message:"",
    
  })
  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setreview({ ...review, [name]: value });
  } 
  const submitTeach = (e) => {
    e.preventDefault()
    axios.post("http://localhost:5050/review", { review }).then((response) => {
      console.log(response.status, response.data.token);
    });
    navigate("/subrev")
  }
    
    return ( 
        <>
       
       <style
  dangerouslySetInnerHTML={{
    __html:
      '\n* {\n  box-sizing: border-box;\n}\n\ninput[type=text], select, textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  resize: vertical;\n}\n\nlabel {\n  padding: 12px 12px 12px 0;\n  display: inline-block;\n}\n\n\n\n\n\n.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n}\n\n.col-25 {\n  float: left;\n  width: 25%;\n  margin-top: 6px;\n}\n\n.col-75 {\n  float: left;\n  width: 75%;\n  margin-top: 6px;\n}\n\n/* Clear floats after the columns */\n.row::after {\n  content: "";\n  display: table;\n  clear: both;\n}\n\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .col-25, .col-75, input[type=submit] {\n    width: 100%;\n    margin-top: 0;\n  }\n}\n'
  }}
/>
<Nav/>
          <div className="sidebarcss"> 
        <div className="about wow fadeInUp" data-wow-delay="0.1s">
         <div className="instructors"> 
    
    <div className="row py-5 px-4">
    
      <div className="col-xl-12 col-md-6 col-sm-10 mx-auto">
        {/* Profile widget */}
        <div className="bg-white shadow rounded overflow-hidden">
          <div className="px-4 pt-0 pb-4 bg-dark">
            <div className="media align-items-end profile-header">
              <div className="profile mr-3">
                <img
                  src={uinfo[0].pic}
                  alt="..."
                  width={200}
                  className="rounded mb-2 img-thumbnail"
                />
                {/* <a href="#" className="btn btn-dark btn-sm btn-block">
                  Edit profile
                </a> */}
              </div>
              <div className="media-body mb-5 ">
                <h4 className="mt-0 mb-0 mr-0 text-white">{uinfo[0].username}</h4>
                <p className="small mb-4">
                  {" "}
                  <i className="fa fa-map-marker mr-2" />
                  {uinfo[0].city} {uinfo[0].State}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="bg-light p-4 d-flex justify-content-end text-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <h5 className="font-weight-bold mb-0 d-block">241</h5>
                <small className="text-muted">
                  {" "}
                  <i className="fa fa-picture-o mr-1" />
                  Photos
                
                </small>
              </li>
              <li className="list-inline-item">
                <h5 className="font-weight-bold mb-0 d-block">84K</h5>
                <small className="text-muted">
                  {" "}
                  <i className="fa fa-user-circle-o mr-1" />
                  Followers
                </small>
              </li>
            </ul>
          </div> */}
          <div className="py-4 px-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h5 className="mb-0">
                <Sidebar/>
              </h5>
              {/* <Link to="/Portfolio1" className="btn btn-link text-muted">
                Show all
              </Link> */}
            </div>
           
            <div className="py-4">
              <h5 className="mb-3">Add Reviews</h5>
              <div className="p-4 bg-light rounded shadow-sm">
              
                <div className="container">
  <form action="/" method="post" onSubmit={submitTeach}>
    <div className="row">
      <div className="col-25">
        <label htmlFor="name"> Name</label>
      </div>
      <div className="col-75">
        <input
          type="text"
          id="fname"
          name="name"
          placeholder="Your name.."
          value={review.name}
          onChange={handleinput}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <input type="hidden" name="rid" 
        value={uinfo[0]._id}
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="col-75">
        <input
          type="text"
          id="lname"
          name="email"
          placeholder="Your last email.."
          value={review.email}
          onChange={handleinput}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="email">Subject</label>
      </div>
      <div className="col-75">
        <input
          type="text"
          id="lname"
          name="subject"
          placeholder="Your subject of review.."
          value={review.subject}
          onChange={handleinput}
        />
      </div>
    </div>
      {/* <div className="col-25">
        <select id="country" name="subject">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
      </div>
    </div> */}
    <div className="row">
      <div className="col-25">
        <label htmlFor="message">Review</label>
      </div>
      <div className="col-75">
        <textarea
          id="subject"
          name="message"
          placeholder="Write something.."
          value={review.message}
          onChange={handleinput}
          style={{ height: 200 }}
          defaultValue={""}
        />
      </div>
    </div>
    <br />
    <div className="row">
      <input type="submit" defaultValue="Submit" className="btn login-btn" />
    </div>
  </form>
</div>




             
              </div>
  
  
            </div>
         
          </div>
        </div>
        {/* End profile widget */}
      
      </div>
    </div>
    </div>
  </div>
  </div>
    
</>

     );
}

export default Reviews1 ;