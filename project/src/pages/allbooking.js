import { useState ,useEffect} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Sidebar from "./sidebar";
import Nav from "../nav";


function Allbooking() {
  let uinfo = JSON.parse(localStorage.getItem("uinfo"))
  console.log(uinfo)

  const [mybooking,setmybookings]=useState([]);
  let {bid}=useParams()


  useEffect(()=>{
  axios.get(`http://localhost:5050/getMyBookings/${uinfo[0]._id}`).then((response)=>{
    setmybookings(response.data)
  });
},[])




  
    return ( 
        <>
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
         
          <style
  dangerouslySetInnerHTML={{
    __html:
      "\n#customers {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers td, #customers th {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n\n#customers tr:nth-child(even){background-color: #f2f2f2;}\n\n#customers tr:hover {background-color: #ddd;}\n\n#customers th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #343148;\n  color: white;\n}\n"
  }}
/>


          <div className="py-4">
            <h5 className="mb-3">My Bookings</h5>
            <div className="p-4 bg-light rounded shadow-sm">
             {/* table */}
           
             <table id="customers">
  <tbody>
    <tr>
  
      <th>Package Name </th>  
   
      <th>Booking status</th>   
      
    </tr>  {mybooking.map((ty)=>
    <tr>

      <td>{ty.data}</td>
   
      <td>Success</td>
    </tr>
  )}
   
   
    
  </tbody>
</table>



              {/* <ul className="list-inline small text-muted mt-3 mb-0">
                <li className="list-inline-item">
                  <i className="fa fa-comment-o mr-2" />
                  12 Comments
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-heart-o mr-2" />
                  200 Likes
                </li>
              </ul> */}
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

export default Allbooking;