      
        import { Link, useNavigate, useParams } from "react-router-dom";
        import Nav from "../nav";
            import { useEffect, useState } from "react";
   import axios from "axios";
           
           function Guidesdet1() {
       
   
   
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
                   src="https://media.licdn.com/dms/image/C4D03AQG4R9TInbnC4A/profile-displayphoto-shrink_800_800/0/1663571724699?e=2147483647&v=beta&t=5rbWliP6Bby1A5nKQlY8hNgI8QYyVIqJP8vlxxtDCRQ"
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
                 <h4 className="mt-0 mb-0 mr-0 " style={{color:"black"}}> 
                Shivangam Mahajan
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
                 "I got introduced to trekking when I was 12-13 years old, and this early exposure got me interested in the activity. Since then, I have hiked all round Uttarakhand, particularly in Uttarkashi district, in the Garhwal region. In fact, my life in hiking has been confined to Uttarakhand. I have loved every trek I've done but if I had to pick a favourite, it would be the treks I undertook in the high-altitude but beautiful Milam Valley in Kumaon. I have had the good fortune of going on two month-long treks in the Milam Valley with students of the National Outdoor Leadership School's backpacking course. This gave me the opportunity to see the valley at a leisurely pace, and admire the beauty of the Nanda Devi Sanctuary (which the valley is part of). This trek is fantastic for its setting alone ."
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
   
   export default Guidesdet1;