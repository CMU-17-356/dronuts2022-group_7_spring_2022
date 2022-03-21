import React, { useState, useEffect } from 'react';
import './App.css';
import CustomNavbar from "./Components/CustomNavbar";
import EmployeeOrderCard from "./Components/PendingOrders/EmployeeOrderCard";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";



import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import DeliveryStatus from './Components/DeliveryStatus';

// var permissions = ""

function App() {
  const [currentOrder, setCurrentOrder] = useState<Array<any>>([]);
  return (
    <Router>
      <div>
        {/* <CustomNavbar permissions = {permissions}/> */}
        <CustomNavbar/>
      <Routes>
          {/* {permissions == "Employee" ? <Route path="/pending" element= {<PendingOrderCard/>} /> : <Route path="/checkout" element= {<Cart/>} />} */}
          <Route path="/pending" element= {<EmployeeOrderCard/>} />
          <Route path="/checkout" element= {<Cart currentOrder = {currentOrder}/>} />
          <Route path="/" element= {<Menu currentOrder = {currentOrder} setCurrentOrder = {setCurrentOrder}/>} />
          <Route path="/delivery_status" element= {<DeliveryStatus/>} />
      </Routes> 
    </div>
    </Router>
  );
}

export default App;