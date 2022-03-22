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
  //create a new order on render for this sessions

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({"donuts":[],"drone_id":"621e8936389a8da299c79fcb"});

  fetch("http://localhost:3001/orders", {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  })
    .then(response => response.json())
    .then(result => {console.log('new order', result); setCurrentOrder(result);})
    .catch(error => console.log('error', error));
  return (
    <Router>
      <div>
        {/* <CustomNavbar permissions = {permissions}/> */}
        <CustomNavbar/>
      <Routes>
          {/* {permissions == "Employee" ? <Route path="/pending" element= {<PendingOrderCard/>} /> : <Route path="/checkout" element= {<Cart/>} />} */}
          <Route path="/pending" element= {<EmployeeOrderCard/>} />
          <Route path="/checkout" element= {<Cart currentOrder = {currentOrder}/>} />
          <Route path="/" element= {<Menu currentOrder = {currentOrder}/>} />
          <Route path="/delivery_status" element= {<DeliveryStatus/>} />
      </Routes> 
    </div>
    </Router>
  );
}

export default App;