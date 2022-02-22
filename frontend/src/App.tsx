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

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar/>
      <Routes>
          <Route path="/pending" element= {<PendingOrderCard/>} />
          <Route path="/" element= {<Menu/>} />
          <Route path="/checkout" element= {<Cart/>} />
      </Routes> 
    </div>
    </Router>
  );
}

export default App;