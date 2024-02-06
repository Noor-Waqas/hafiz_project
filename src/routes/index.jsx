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
import Printag from "../component/printTag/Index";
import PandingState from "../component/pandingFinish/Index";
import PrintTag from "../component/printTag/Index";
import CashBookDay from "../component/cashBookDay/Index";
import CashDetails from "../component/cashDetailsBook/Index";
import Expence from "../component/expence/Index"
import Income from "../component/income/Index";
import ServiceWiseOrder from "../component/ServiceWiseOrder/Index";
import ServiceAndGarment from "../component/ServiceAndGarment/Index";
import PaymentAdjustment from "../component/PaymentAdjustment/Index";
import OrderbyLocality from "../component/OrderbyLocality/Index";
import GarmentStatus from "../component/GarmentStatus/Index";
import OrderReport from "../component/OrderReport/Index";
import GarmentDescriptions from "../component/GarmentDescriptions/Index"
import Colors from "../component/colorDetails/Index";
import GarmentReturnCause from "../component/GarmentReturnCause/Index";
import StoreInformation from "../component/StoreInformation/Index";
import ChangePassword from "../component/changePassword/Index";

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
        <Route path="/printetag" element={<Printag/>} />
        <Route path="/panding.state" element={<PandingState/>} />
        <Route path="/print.tag" element={<PrintTag/>} />
        <Route path="/cash.book.day" element={<CashBookDay/>} />
        <Route path="/cash.Details.book" element={<CashDetails/>} />
        <Route path="/expence" element={<Expence/>} />
        <Route path="/income" element={<Income/>} />
        <Route path="/service.wise.order" element={<ServiceWiseOrder/>} />
        <Route path="/service.and.garment" element={<ServiceAndGarment/>} />
        <Route path="/payment.adjustment" element={<PaymentAdjustment/>} />
        <Route path="/order.by.locality" element={<OrderbyLocality/>} />
        <Route path="/garment.status" element={<GarmentStatus/>} />
        <Route path="/order.report" element={<OrderReport/>} />
        <Route path="/garment.descriptions" element={<GarmentDescriptions/>} />
        <Route path="/colors" element={<Colors/>} />
        <Route path="/garment.return.cause" element={<GarmentReturnCause/>} />
        <Route path="/store.information" element={<StoreInformation/>} />
        <Route path="/change.password" element={<ChangePassword/>} />
       </Route>
      </Routes>
    </BrowserRouter>
    
  </div>
  )
}

export default index