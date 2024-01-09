import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Nav from "../component/navbar";
import Home from "../component/home";
import Cuctomer from "../component/customer";
import Report from "../component/reports";
import Setting from "../component/set_up";
import Support from "../component/support";
import Subscription from "../component/subscription";






const index = () => {
  return (
    <div>
      {/* <Nav/> */}
    <BrowserRouter>
        <Nav/>
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/customer" element={<Cuctomer />}/>
            <Route path="/reports" element={<Report />}/>
            <Route path="/setup" element={<Setting />}/>
            <Route path="/support" element={<Support />}/>
            <Route path="/subscription" element={<Subscription />}/>
            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default index