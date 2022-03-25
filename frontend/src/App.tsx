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

  const findOrCreateNewOrder = async () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({"donuts":[],"drone_id":"621e8936389a8da299c79fcb"});

    const createNewOrder = async () => {
      await fetch("https://dronutsgroup7backend.uk.r.appspot.com/orders", {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }).then(response => response.json())
      .then(result => {console.log('new order', result); setCurrentOrderID(result._id);})
      .catch(error => console.log('error', error));
      console.log("created new order worked");
    }

    await fetch("https://dronutsgroup7backend.uk.r.appspot.com/orders/active")
      .then(async response => {
        // console.log(await response.json());
        var bodyStream = await response.json();
        console.log("bodySteam", bodyStream);
        const isEmptyResponse = ((bodyStream.length === 0));
        console.log(isEmptyResponse);
        if(isEmptyResponse){
          await createNewOrder();
          console.log("created new order");
          const error = response.status;
          // setLoading(false);
          return Promise.reject(error);
        }
        else{
          // setLoading(false);
          return bodyStream;
        }
      })
      .then(result => 
        {
          //if there is already an active order then assume that is the current session
          console.log('current order', result); 
          setCurrentOrderID(result[0]._id);
          console.log("ID line 62", currentOrderID);
          // setLoading(false);
        })
      .catch(
        error => console.log('error', error)
      );
      setLoading(false);
      
  }

    useEffect(() => {
      findOrCreateNewOrder();
      }, []);
  if (isLoading) {
    return <div className="App">Customer Loading...</div>;
  }
  else{
    return (
      <Router>
        <div>
          {/* <CustomNavbar permissions = {permissions}/> */}
          <CustomNavbar/>
        <Routes>
            {console.log("currentOrderID before passing", currentOrderID)}
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
}

export default App;