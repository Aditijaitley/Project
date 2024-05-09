import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Contact1 from './pages/contact';
import Packages from './pages/packages';
import About1 from './pages/about';
import Layout from './pages/Layout';
import Services1 from './pages/services';
import Login from './pages/login';
import Register from './pages/register';
import Forgot from './forgot';
import Goa from './pages/goa';
import Booking from './pages/Booking';
import Job from './pages/job';

import MyAccount from './pages/myaccount';
import AfterSubmit from './pages/aftersubmit';
import GoaPackage from './pages/goapackage';
import Rent from './pages/rent';
import Join from './pages/join';
import Pp from './pp';
import Events from './pages/events';
import Reviews from './Reviews';
import Reviews1 from './pages/reviewss';
import Showreview from './pages/showreviews';
import Blogs from './pages/blogs';
import Image from './pages/image';
import Allbooking from './pages/allbooking';
import Blogdetail from './pages/blogdetail';
import Paymentsuccess from './paymentsuccess';
import Edituser from './pages/edituser';
import Logout from './pages/logout';
import Wild from './pages/wildlife';
import Heritage from './pages/heritage';
import Pilgrimage from './pages/pilgrimage';
import Hill from './pages/Hill';
import Adven from './pages/adven';
import Beach from './pages/beach';
import Call from './pages/call';
import Amritsar from './pages/amritsar';
import Munnar from './pages/munnar';
import Sikkim from './pages/sikkim';
import Guj from './pages/guj';
import North from './pages/north';
import South from './pages/south';
import Guidesdet from './pages/guidesdet';
import Guidesdet1 from './pages/guidesdet1';
import Guidesdet2 from './pages/guidesdet2';
import SubRev from './pages/subrev';
import Manali from './pages/manali';
import Call2 from './pages/call2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
 
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Layout />} />
          <Route path="home1" element={<Layout/>} />
          <Route path="about" element={<About1/>} />
          <Route path="packages" element={<Packages/>} />
          <Route path="services" element={<Services1/>} />
          <Route path="contact" element={<Contact1 />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register/>} />
          <Route path="forgot" element={<Forgot/>} />
          <Route path="goa" element={<Goa/>} />
          <Route path="booking/:mid" element={<Booking/>} />
          <Route path="job" element={<Job/>} />
          <Route path="myaccount" element={<MyAccount/>} />
          <Route path="aftersubmit" element={<AfterSubmit/>} />
          <Route path="goapackage/:pname" element={<GoaPackage/>} />
          <Route path="join" element={<Join/>} />
          <Route path="job" element={<Job/>} />
          <Route path="showrev" element={<Showreview/>} />
          <Route path="event" element={<Events/>} />
          <Route path="blogs" element={<Blogs/>} />
          <Route path="gallery" element={<Image/>} />
          <Route path="review" element={<Reviews1/>} />
          <Route path="allbooking" element={<Allbooking/>} />
          <Route path="blogdetail/:bid" element={<Blogdetail/>} />
          <Route path="paymentsuccess" element={<Paymentsuccess/>} />
          <Route path="edituser" element={<Edituser/>} />
          <Route path="logout" element={<Logout/>} />
          <Route path="wild" element={<Wild/>} />
          <Route path="heritage" element={<Heritage/>} />
          <Route path="pilgrimage" element={<Pilgrimage/>} />
          <Route path="hill" element={<Hill/>} />
          <Route path="adven" element={<Adven/>} />
          <Route path="beach" element={<Beach/>} />
          <Route path="call" element={<Call/>} />
          <Route path="amrit" element={<Amritsar/>} />
          <Route path="munnar" element={<Munnar/>} />
          <Route path="sikkim" element={<Sikkim/>} />
          <Route path="guj" element={<Guj/>} />
          <Route path="north" element={<North/>} />
          <Route path="south" element={<South/>} />
          <Route path="guidesdet" element={<Guidesdet/>} />
          <Route path="guidesdet1" element={<Guidesdet1/>} />
          <Route path="guidesdet2" element={<Guidesdet2/>} />
          <Route path="subrev" element={<SubRev/>} />
          <Route path="manali" element={<Manali/>} />
          <Route path="call2" element={<Call2/>} />

        </Route>
      </Routes>
    </BrowserRouter> 
{/* <Pp/> */}

{/* <Blogdetail/> */}
{/* 
<Events/> */}
{/* <Reviews1/> */}
{/* <Showreview/> */}
  </>
);


reportWebVitals();
