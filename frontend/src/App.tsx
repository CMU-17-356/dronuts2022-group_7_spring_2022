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
  const [currentOrderID, setCurrentOrderID] = useState<String>("");
  const [isLoading, setLoading] = useState(true);
  //create a new order on render for this sessions

  const createNewOrder = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    var raw = JSON.stringify({"donuts":[],"drone_id":"621e8936389a8da299c79fcb"});

    const response = await fetch("http://localhost:3001/orders")
      .then(response => response.json())
      .then(result => {console.log('new order', result); setCurrentOrderID(result[0]._id);})
      .catch(error => console.log('error', error));

      setLoading(false);
    return response;
  }

    useEffect(() => {
      if(currentOrderID == ""){
        createNewOrder();
      }
      }, []);
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <Router>
      <div>
        {/* <CustomNavbar permissions = {permissions}/> */}
        <CustomNavbar/>
      <Routes>
          if()
          {/* {permissions == "Employee" ? <Route path="/pending" element= {<PendingOrderCard/>} /> : <Route path="/checkout" element= {<Cart/>} />} */}
          <Route path="/pending" element= {<EmployeeOrderCard/>} />
          <Route path="/checkout" element= {<Cart currentOrderID = {currentOrderID}/>} />
          <Route path="/" element= {<Menu currentOrderID = {currentOrderID}/>} />
          <Route path="/delivery_status" element= {<DeliveryStatus/>} />
      </Routes> 
    </div>
    </Router>
  );
}

export default App;