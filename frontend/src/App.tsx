import React from 'react';
import './App.css';
import CustomNavbar from "./Components/CustomNavbar";
import PendingOrderCard from "./Components/PendingOrders/PendingOrderCard";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";



import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import DeliveryStatus from './Components/DeliveryStatus';

var permissions = ""

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar permissions = {permissions}/>
      <Routes>
          {permissions == "Employee" ? <Route path="/pending" element= {<PendingOrderCard/>} /> : <Route path="/checkout" element= {<Cart/>} />}
          <Route path="/" element= {<Menu/>} />
          <Route path="/delivery_status" element= {<DeliveryStatus/>} />
      </Routes> 
    </div>
    </Router>
  );
}

export default App;