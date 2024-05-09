      
        import { Link, useNavigate, useParams } from "react-router-dom";
     import Nav from "../nav";
         import { useEffect, useState } from "react";
import axios from "axios";
        
        function Guidesdet() {
    


  const navigate = useNavigate();

  const [mentor,setmentors]=useState([]);
  let {mid}=useParams()
  
useEffect(()=>{
  
axios.get(`http://localhost:5050/getsingleMentor/${mid}`).then((response)=>{
  setmentors(response.data)
});

},[]);

    return ( 
        <>
       <Nav/>
     
     <div className="guide11">
      
       <div className="about wow fadeInUp" data-wow-delay="0.1s">
       <div className="instructors"> 
  
  <div className="row py-5 px-4">
    {/* {mentor.map((ty)=> */}
    <div className="col-xl-12 col-md-6 col-sm-10 mx-auto">
      {/* Profile widget */}
      <div className="bg-white shadow rounded overflow-hidden">
        <div className="px-4 pt-0 pb-4 bg-dark">
          <div className="media align-items-end profile-header">
            <div className="profile mr-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfSuGql_YXJ6Z_ZNFuEyfs_Gu2wQcBw1wbU1zXc80ryOPzE6tGnDxw4CSRfmkipUGAbn4&usqp=CAU"
                // {ty.pic}
                alt="..."
                width={200}
                className="rounded mb-2 img-thumbnail"
              />
              {/* <a href="#" className="btn btn-dark btn-sm btn-block">
                Edit profile
              </a> */}
            </div>
            <div className="media-body mb-5 ">
              <h4 className="mt-0 mb-0 mr-0 "style={{color:"black"}}>
                {/* {ty.username}frgdg */}Isha Chaudhary
                </h4>
              <p className="small mb-4">
                {" "}
                {/* <i className="fa fa-map-marker mr-2" />fdg */}
               {/* {ty.activity} */}
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
          
          </ul>
        </div> */}
        <div className="py-4 px-4">
          {/* <div className="d-flex align-items-center justify-content-between mb-3">
            <h5 className="mb-0">Recent photos</h5>
            <Link to="/Portfolio1" className="btn btn-link text-muted">
              Show all
            </Link>
          </div> */}
          
          <div className="py-4">
            <h5 className="mb-3">Recent posts</h5>
            <div className="p-4 bg-light rounded shadow-sm">
              <p className="font-italic mb-0">
             " I caught the adventure bug early in life. My father introduced me to the Great Outdoors and started mountaineering while in school at The Lawrence School, Sanawar. Since then I have had a great time kayaking, rafting, skiing, climbing, and scuba diving around the world. Competing in National and International kayaking and rafting championships and completing the Polar Trilogy (comprising skiing to the North Pole, to the South Pole and across the Greenland) has been one of the high points.."
              </p>
             
            </div>









          </div>
       {/* <button onClick={()=>navigate(`/Price1/${ty._id}`)} className="btn login-btn w-100" >BOOK CLASS NOW</button> */}
        </div>
      </div>
      {/* End profile widget */}
    
    </div>
  </div>
  </div></div>
  </div>
</>


     );
}

export default Guidesdet;