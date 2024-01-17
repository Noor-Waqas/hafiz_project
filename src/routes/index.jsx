import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Nav from "../component/navbar";
import Home from "../component/home";
import Cuctomer from "../component/customer";
import Report from "../component/reports";
import Setting from "../component/set_up";
import Support from "../component/support";
import Subscription from "../component/subscription";
import Login from "../component/login";
import HeroPart from "../component/navbar/hero";
import Cuctomer_Preference from "../component/CuctomerPreference";
import Merge from "../component/marge_page";
import Message from "../component/customer_message";
import Customer_Addwance from "../component/customerAdvances";
import Edit from "../component/edit_Order";
import Cancel_Order from "../component/cancel_order";
import Delete_Order from "../component/delete_Order";






const index = () => {
  return (
    <div>
    {/* <Nav/> */}

    <BrowserRouter>
      <Routes>
      <Route element={<Nav />}>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<Cuctomer />} />
        <Route path="/reports" element={<Report />} />
        <Route path="/setup" element={<Setting />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/hero" element={<HeroPart/>} />
        <Route path="/preference" element={<Cuctomer_Preference/>} />
        <Route path="/merge" element={<Merge/>} />
        <Route path="/message" element={<Message/>} />
        <Route path="/customer.addwance" element={<Customer_Addwance/>} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/cancel.order" element={<Cancel_Order/>} />
        <Route path="/delete.order" element={<Delete_Order/>} />

       </Route>
      </Routes>
    </BrowserRouter>
    
  </div>
  )
}

export default index