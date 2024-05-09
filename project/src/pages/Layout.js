import Navbar from "../Navbar";
import Topbar from "../Topbar";
import About from "../About";
import Service from "../Service";
import Destination from "../Destination";
import Package from "../Package";
import Booking from "./Booking";
import Process from "../Process";
import Team from "../Team";
import Testimonial from "../Testimonial";
import Footer from "../Footer";
import Login from "./login";
import Guides from "../Guides";
import Tribes from "../tribes";
import Reviews from "../Reviews";
import Menuu from "../menuuuu";
import Copy from "./copy";
import Ques from "./ques";
function Layout() {
    return (
        <>
      
        <Navbar/>
        {/* <Login/> */}
        {/* <Package/> */}
      <Copy/>
        {/* <Service/> */}
        <Destination/>
     
        <Process/>
        <About/>
      
        {/* <Booking/> */}
        {/* <Process/> */}
        {/* <Team/> */}
        <Tribes/>
        <Guides/>

        <Menuu/>


        <Reviews/>
 
        <Ques/>
        {/* <Testimonial/> */}
        {/* <Footer/> */}
        </>
      );
}

export default Layout;