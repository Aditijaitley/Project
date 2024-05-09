import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Logout() {
    let navigate=useNavigate()
    useEffect(()=>{
    localStorage.clear();
    navigate("/")
    })
    return ( 
        <>
     <div>
        
     </div>

        </>
     );
}

export default Logout;