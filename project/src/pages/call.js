import { Link } from "react-router-dom";
import Nav from "../nav";
function Call() {
    return ( 
        <>
  {/* <div className="text-center"> */}

    {/* <a href="#myModal" className="trigger-btn" data-toggle="modal">
      Click to Open Confirm request
    </a> */}
  {/* </div> */}
  {/* Modal HTML*/}
  {/* <div id="myModal" className="modal fade"> */}
  <Nav/>
  <br/><br/><br/>
  <div className="call">
    <div className="modal-dialog modal-confirm">
      <div className="modal-content">
        <div className="modal-header">
          <div className="icon-box">
            <i className="material-icons"></i>
          </div>
          <h4 className="modal-title w-100">Awesome!</h4>
        </div>
        <div className="modal-body">
          <p className="text-center">
            Form Submitted Successfully.
          </p>
        </div>
        <div className="modal-footer">
    <form action="http://localhost:5050/" method="post">
        <input type="hidden" value="600"></input>
       <Link to="/home1"  ><input type="submit" className="btn btn-success btn-block" data-dismiss="modal" style={{marginRight:100}} value="ok" name="ok"

         
         /></Link> 
          </form>
        </div>
      </div>
    </div>
    </div>
  {/* </div> */}
</>

     );
}

export default Call;