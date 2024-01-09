
import AllRoutes from "./routes"
import Nav from "./component/navbar"
import Home from "./component/home"
import Cuctomer from "./component/customer"
import Report from "./component/reports"
import Setting from "./component/set_up"
import Subscription from "./component/subscription"
import Support from "./component/support"
function App() {


  return (
    <>
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
