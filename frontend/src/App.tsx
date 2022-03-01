import React, { useState } from 'react';
import './App.css';
import CustomNavbar from "./Components/CustomNavbar";
import PendingOrderCard from "./Components/PendingOrders/PendingOrderCard";
import Menu from "./Components/Menu";
import {Button} from '@geist-ui/core'
import Cart from "./Components/Cart";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import DeliveryStatus from './Components/DeliveryStatus';

const customer_string = "Customer";
const employee_string = "Employee";
var permissions = customer_string

function App() {

  const [currPermission, setPermission] = useState(permissions);

  return (
    <Router>
      <div>
        <CustomNavbar permissions = {currPermission}/>
        <Button auto type="secondary" onClick={() => {
        if (currPermission === employee_string) {
          setPermission(customer_string);
        } else { 
          setPermission(employee_string);
        }
      }}>Switch to {currPermission === employee_string ? employee_string : customer_string} view</Button>
      <Routes>
          {currPermission === employee_string ? <Route path="/pending" element= {<PendingOrderCard/>} /> : <Route path="/checkout" element= {<Cart/>} />}
          <Route path="/" element= {<Menu/>} />
          <Route path="/delivery_status" element= {<DeliveryStatus/>} />
      </Routes> 
    </div>
    </Router>
  );
}

export default App;