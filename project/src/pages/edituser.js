import { useState ,useEffect} from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import Nav from "../nav";
import Sidebar from "./sidebar";

function Edituser() {
  let uinfo = JSON.parse(localStorage.getItem("uinfo"))

  console.log(uinfo)

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
            <h5 className="mb-3"><Sidebar/>
            </h5>
          
          </div>
         
          <div className="py-4">
            <h5 className="mb-3">Edit Profile</h5>
            <div className="p-4 bg-light rounded shadow-sm">
            <form action="/" method="post" >
    
      <br />
      
      <br />

      <style
    dangerouslySetInnerHTML={{
      __html:
        '\n      html, body {\n      min-height: 100%;\n      }\n      body, div, form, input, select, textarea, label, p { \n      padding: 0;\n      margin: 0;\n      outline: none;\n      font-family: Roboto, Arial, sans-serif;\n      font-size: 14px;\n      color: #666;\n      line-height: 22px;\n      }\n      h1 {\n      position: absolute;\n      margin: 0;\n      font-size: 40px;\n      color: #fff;\n      z-index: 2;\n      line-height: 83px;\n      }\n      textarea {\n      width: calc(100% - 12px);\n      padding: 5px;\n      }\n      .testbox {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: inherit;\n      padding: 20px;\n      }\n      form {\n      width: 100%;\n      padding: 20px;\n      border-radius: 6px;\n      background: #fff;\n      box-shadow: 0 0 8px  #669999; \n      }\n      .banner {\n      position: relative;\n      height: 300px;\n      background-image: url("/uploads/media/default/0001/02/8070c999efd1a155ad843379a5508d16f544aeaf.jpeg");  \n      background-size: cover;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-align: center;\n      }\n      .banner::after {\n      content: "";\n      background-color: rgba(0, 0, 0, 0.3); \n      position: absolute;\n      width: 100%;\n      height: 100%;\n      }\n      input, select, textarea {\n      margin-bottom: 10px;\n      border: 1px solid #ccc;\n      border-radius: 3px;\n      }\n      input {\n      width: calc(100% - 10px);\n      padding: 5px;\n      }\n      input[type="date"] {\n      padding: 4px 5px;\n      }\n      textarea {\n      width: calc(100% - 12px);\n      padding: 5px;\n      }\n      .item:hover p, .item:hover i, .question:hover p, .question label:hover, input:hover::placeholder {\n      color:  #669999;\n      }\n      .item input:hover, .item select:hover, .item textarea:hover {\n      border: 1px solid transparent;\n      box-shadow: 0 0 3px 0  #669999;\n      color: #669999;\n      }\n      .item {\n      position: relative;\n      margin: 10px 0;\n      }\n      .item span {\n      color: red;\n      }\n      .week {\n      display:flex;\n      justfiy-content:space-between;\n      }\n      .colums {\n      display:flex;\n      justify-content:space-between;\n      flex-direction:row;\n      flex-wrap:wrap;\n      }\n      .colums div {\n      width:48%;\n      }\n      input[type="date"]::-webkit-inner-spin-button {\n      display: none;\n      }\n      .item i, input[type="date"]::-webkit-calendar-picker-indicator {\n      position: absolute;\n      font-size: 20px;\n      color:  #a3c2c2;\n      }\n      .item i {\n      right: 1%;\n      top: 30px;\n      z-index: 1;\n      }\n      input[type=radio], input[type=checkbox]  {\n      display: none;\n      }\n      label.radio {\n      position: relative;\n      display: inline-block;\n      margin: 5px 20px 15px 0;\n      cursor: pointer;\n      }\n      .question span {\n      margin-left: 30px;\n      }\n      .question-answer label {\n      display: block;\n      }\n      label.radio:before {\n      content: "";\n      position: absolute;\n      left: 0;\n      width: 17px;\n      height: 17px;\n      border-radius: 50%;\n      border: 2px solid #ccc;\n      }\n      input[type=radio]:checked + label:before, label.radio:hover:before {\n      border: 2px solid  #669999;\n      }\n      label.radio:after {\n      content: "";\n      position: absolute;\n      top: 6px;\n      left: 5px;\n      width: 8px;\n      height: 4px;\n      border: 3px solid  #669999;\n      border-top: none;\n      border-right: none;\n      transform: rotate(-45deg);\n      opacity: 0;\n      }\n      input[type=radio]:checked + label:after {\n      opacity: 1;\n      }\n      .flax {\n      display:flex;\n      justify-content:space-around;\n      }\n      .btn-block {\n      margin-top: 10px;\n      text-align: center;\n      }\n      button {\n      width: 150px;\n      padding: 10px;\n      border: none;\n      border-radius: 5px; \n      background:  #669999;\n      font-size: 16px;\n      color: #fff;\n      cursor: pointer;\n      }\n      button:hover {\n      background:  #a3c2c2;\n      }\n      @media (min-width: 568px) {\n      .name-item, .city-item {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n      }\n      .name-item input, .name-item div {\n      width: calc(50% - 20px);\n      }\n      .name-item div input {\n      width:97%;}\n      .name-item div label {\n      display:block;\n      padding-bottom:5px;\n      }\n      }\n    '
    }}
    />
      <div className="colums">
      {/* <div className="item">
          <label htmlFor="pic">
            Image<span>*</span>
          </label>
          <input id="pic" type="file" name="pic" value={uinfo[0].pic}  />
        </div> */}
        <div className="item">
          <label htmlFor="username">
            Name<span>*</span>
          </label>
          <input id="name" type="text" name="username" value={uinfo[0].username}  />
        </div>
        <div className="item">
          <label htmlFor="email">
            Email Address<span>*</span>
          </label>
          <input id="eaddress" type="text" name="email" value={uinfo[0].email}/>
        </div>
        <div className="item">
          <label htmlFor="phone">
            Phone<span>*</span>
          </label>
          <input id="phone" type="text" name="phone"  value={uinfo[0].phone}/>
        </div>
      
        <div className="item">
          <label htmlFor="city">
           City<span>*</span>
          </label>
          <input id="exp" type="text" name="city"  value={uinfo[0].city}/>
        </div>
        <div className="item">
          <label htmlFor="state">
            State<span>*</span>
          </label>
          <input id="degree" type="text" name="state"  value={uinfo[0].state}/>
        </div>
        
        <div className="item">
          <label htmlFor="name">
            Upload your picture<span>*</span>
          </label>
          <input id="pic" type="file" name="pic" />
        </div>
      </div>
    
      <input type="submit" value="Save The Edit " className="btn login-btn w-100"/>
    </form>

             
              <ul className="list-inline small text-muted mt-3 mb-0">
                <li className="list-inline-item">
                  <i className="fa fa-comment-o mr-2" />
                  12 Comments
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-heart-o mr-2" />
                  200 Likes
                </li>
              </ul>
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

export default Edituser ;


