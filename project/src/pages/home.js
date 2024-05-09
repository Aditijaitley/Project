import { Outlet, Link } from "react-router-dom";
import Footer from "../Footer";
import Topbar from "../Topbar";
function Home() {
    return ( 
        <>
       <Topbar/>
   <Outlet />
<Footer/>
</>
    
  
     );
}

export default Home;