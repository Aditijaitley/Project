import Nav from "../nav";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Booking() {
  let uinfo = JSON.parse(localStorage.getItem("uinfo"))
  console.log(uinfo)
 
  const navigate = useNavigate();
  const [nprice, setnprice] = useState({});
  const [price, setprice] = useState([]);
  const [Error, setError] = useState(false);
  const [userBook, setuserBook] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
   dd:"",
   mm:"",
   yy:"",
   time:"",
   user_id:"",
  // name:"",
 data:"",
  //  rate:""
  })
  const handleinput = (e) => {
    // alert(e.target.value)

    const name = e.target.name;
    const value = e.target.value;
    console.log(nprice[0].price)
    setuserBook({ ...userBook, [name]: value ,packege:nprice[0].price,user_id:uinfo[0]._id});


  }
  console.log(userBook)
  const submitBook = (e) => {
    e.preventDefault()
// if(firstname.length==0||lastname.length==0||phone.length==0||dd.length==0||mm.length==0||yy.length==0||time.length==0)
// {
//   setError(true)
// }
 console.log()

    axios.post("http://localhost:5050/book", { userBook }).then((response) => {
      console.log(response.status, response.data.token);

     
    });


    }
    
    // navigate("/aftersubmit")

  

  let {mid} = useParams()
  useEffect(() => {

    axios.get(`http://localhost:5050/getsinglePackages/${mid}`).then((response) => {
      setprice(response.data)
      setnprice(response.data)
      console.log(response.data)

      if(uinfo[0]._id<0){
        navigate("/login")
        
      }
      else
      {
        redirect("/Booking")
      }
  
    });

  }, []);

  return (
    <>
     

     <Nav/>
<br/>
     <div className="a" >

      <div className="ra">
     
       
        <h1 style={{ FontFace: "Merriweather,serif", textAlign: "center" ,marginBottom:2 , paddingTop:45}}>Book Now</h1>
        <p style={{ margin: "1em auto", textAlign: "center" }}>Please fill out this form with the required information</p>
        
          <form action="http://localhost:5050/create-checkout-session" method="post"  >
          

            <fieldset>
          {price.map((ty)=>
         <div className="row" style={{border:"2 solid black"}}>
            {/* <h3 style={{ FontFace: "Merriweather,serif", marginLeft: 100 }}> Package Name</h3> */}
            {/* <h4 style={{marginLeft: 50}}>{ty.name} {ty.data}</h4> */}
            {/* <h4 style={{ FontFace: "Merriweather,serif", marginLeft: 27 }}> Amount</h4> */}
                
            {/* <h3 style={{marginLeft: 200}}>    <span className="dif"style={{color:"red"}}>
          {ty.rate}
        </span></h3> */}
                {/* <input style={{ width:1000 , background:"none" , color:"black" , fontSize:20}} type="text" name="rate" value={ty.data}readOnly/> */}

        <div className="h" style={{float:"left"}}>
        <i className="fa fa-inr" style={{ width:20 , background:"none" , color:"red" , fontSize:30}}/>
        <input style={{ width:200 , background:"none" , color:"red" , fontSize:30}} type="text" name="rate" value={ty.rate} readOnly/>
      {/* <input type="text" name="rate" value={ty.rate} /> */}
      {/* <input type="text" name="name"value={ty.name} /> */}
      <input type="text" name="data"value={ty.data}  style={{background:"none"}}/>
            </div></div>
            )}
              <label>
                <h4 style={{ FontFace: "Merriweather,serif", marginLeft: 18 }}> First Name</h4> </label>
                <input type="text" name="firstname" required="required" onChange={handleinput}
                  value={userBook.firstname} />
             

              <label>
                <h4 style={{ FontFace: "Merriweather,serif", marginLeft: 18 }}> Last  Name</h4>

                <input type="text" name="lastname" onChange={handleinput}
                  value={userBook.lastname} />
              </label>
              <label>
                <h4 style={{ FontFace: "Merriweather,serif", marginLeft: 18 }}>  Email</h4>

                <input type="email" name="email"
                  onChange={handleinput}
                  value={userBook.email} />
              </label>
              <label>
                <h4 style={{ FontFace: "Merriweather,serif", marginLeft: 18 }}>  Phone</h4>
                <input type="text" name="phone"
                  onChange={handleinput}
                  value={userBook.phone} />
              </label>
           
              {/* <label>
        {" "}
        <h4 style={{FontFace:"Merriweather,serif", marginLeft:18}}> Transportation Type</h4>
        <select name="accomodation">
          <option value="">(select one)</option>
          <option value={1}> Air</option>
          <option value={2}> Bus</option>
          <option value={3}> Car</option>
          <option value={4}> Bikes</option>
        </select>
      </label> */}

              {/* <label>
      <h4 style={{FontFace:"Merriweather,serif", marginLeft:18}}>Number of Persons{" "}</h4>
        <input type="number" name="no" min={1} max={120} className="person" 
         onChange={handleinput}
         value={userBook.no}/>
        <br />
        <br />
        </label> */}
              {/* <label>
        {" "}
        <h4 style={{FontFace:"Merriweather,serif", marginLeft:18}}> Hotel Type</h4>
        <select name="hoteltype" onChange={handleinput}>
          <option value="" >(select one)</option>
          <option value="Hayatt"> Hayatt</option>
          <option value="marriot"> Marriot</option>
          <option value="Ramada">Ramada </option>
   
        </select>
      </label> */}
              {/* <label>
      <h4 style={{FontFace:"Merriweather,serif", marginLeft:18}}>Number of Rooms{" "}</h4>
        <input type="number" name="rooms" min={1} max={120} className="rooms" 
         onChange={handleinput}
         value={userBook.rooms}
        />
        <br />
        <br />
        </label> */}
              {/* <label>
          
          
        <h4 style={{FontFace:"Merriweather,serif", marginLeft:18}}>  Room Type</h4>
          <label>
            <input type="radio" name="roomtype" value="singleroom" checked={userBook.roomtype==="singleroom"} onClick={handleinput} className="inline" /> Single
            Room
          </label>
          <label>
            <input type="radio" name="roomtype" value="doubleroom"checked={userBook.roomtype==="doubleroom"}onClick={handleinput}className="inline" /> Double
            Room
          </label>
          <label>
            <input type="radio" name="roomtype" value="tripleroom"checked={userBook.roomtype==="tripleroom"}onClick={handleinput}className="inline" /> Triple
            Room
          </label>
          <label>
            <input type="radio" name="roomtype" value="quadroom"checked={userBook.roomtype==="quadroom"}onClick={handleinput}className="inline" /> Quad
            Bedroom
          </label>
        </label> */}


              {/* <label>
      <h4 style={{FontFace:"Merriweather,serif", marginLeft:18}}>Additional Requests</h4>
        <textarea
          name="additional"
          rows={5}
          cols={30}
          placeholder="Your message ..."
          defaultValue={""}
        />
      </label> */}
              {/* <label htmlFor="package">
            Package <span>*</span>
          </label> */}
  {/* <h4 style={{FontFace:"Merriweather,serif", marginLeft:18}}>Package</h4>
{price.map((ty) =>

  
              <input id="package" type="text" name="package" value={ty.price}  readonly />
             
 )}  */}
            </fieldset>
            <div className="row">
      <div className="col-xl-6" >
      <h4 style={{ FontFace: "Merriweather,serif", marginLeft: 18 }}> Date</h4>
        <div className="row">
          <div className="col-xl-4">
      
         
            <input type="text" placeholder="DD"  name="dd"
                    onChange={handleinput}
                    value={userBook.dd}
                     />
          </div>
          <div className="col-xl-4">
            <input type="text" placeholder="MM"   name="mm"
                    onChange={handleinput}
                    value={userBook.mm}
                    />
          </div>
          <div className="col-xl-4">
            <input type="text" placeholder="YYYY"   name="yy"
                    onChange={handleinput}
                    value={userBook.yy}
                    />
          </div>
       
        </div>
      </div>
      <div className="col-xl-6">
        <h4> Time</h4>
   <select name="time" style={{width:227 ,height:37}} onChange={handleinput}>
    <option value="">(Select One)</option>
    <option value="11:00am">11:00am</option>
    <option value="12:00pm">12:00pm</option>
    <option value="1:00pm">1:00pm</option>
    <option value="2:00pm">2:00pm</option>
    <option value="3:00pm">3:00pm</option>
    <option value="4:00pm">4:00pm</option>
    <option value="5:00pm">5:00pm</option>
    <option value="6:00pm">6:00pm</option>
    <option value="7:00pm">7:00pm</option>
    <option value="8:00pm">8:00pm</option>
    <option value="9:00pm">9:00pm</option>
   
   </select>
      </div>
    </div>
            {/* <label>
              <h4  style={{ FontFace: "Merriweather,serif", marginLeft: 18 }}>Amount</h4>
            <input name="amount1" value="35000"
            onChange={handleinput}
              readOnly/>
            </label> */}
         
            <input type="submit" value="Submit"name="submit" id="book" defaultValue="book" />
            <input type="hidden" value={uinfo[0]._id} name="user_id"/>
          


          

          </form>
          {/* <form action="http://localhost:5050/create-checkout-session" method="post"  >
          <label>
              <h4  style={{ FontFace: "Merriweather,serif", marginLeft: 18 }}>Amount</h4>
            <input name="amount1" value="35000"
            onChange={handleinput}
              readOnly/>
            </label>
          <input type="submit" value="Pay now" name="submit" id="book" defaultValue="book" />
            </form> */}
        
      </  div>
    </div>
    </>




  );
}

export default Booking;